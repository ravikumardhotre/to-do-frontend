import { Component, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { ApiserviceService } from 'src/app/services/apiservice.service';
import { UtilService } from 'src/app/services/util.service';
import { ToasterService } from 'src/app/services/toaster.service';



@Component({
  selector: 'app-allbook',
  templateUrl: './allbook.component.html',
  styleUrls: ['./allbook.component.scss']
})
export class AllbookComponent {
  isLoading: boolean = false;
  book: any;
  allBook: any;
  selectedBook: any;
booktitle: any;
bookcategory: any;
reviews: any;
bookPrice: any;
bookauthour: any;
  authour: any;


  constructor(private router: Router, private NgbModal: NgbModal, private utilservice: UtilService, private apiservice: ApiserviceService, public toasterService: ToasterService) {

  }
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      processing: true,
      //   lengthMenu: [
      //     [5, 10, 25, 50, -1 ],
      //     [ '5 rows','10 rows', '25 rows', '50 rows', 'Show all' ]
      // ],
    }
    this.bookList()
  }

  async bookList() {
    this.isLoading = true;
    try {
      const res = await this.apiservice.getBooks();
     this.allBook = res.data.data;
      console.log(this.allBook)
      this.isLoading = false;
      this.dtTrigger.next('');
    } catch (e: any) {
      this.toasterService.showError(e.response.data.message, "");
      this.isLoading = false;
      if (e.response.status == 401) {
        this.router.navigateByUrl('/login');
      }
    }
  }
  async addBook() {
    if (!this.booktitle) {
      this.toasterService.showWarning("Please enter book name", "");
      return;
    }
    let param = {
      booktitle: this.booktitle,
      bookcategory: this.bookcategory,
      authour: this.authour,
      reviews: this.reviews,
      bookPrice: this.bookPrice,

    }
    this.isLoading = true;

    try {
      const res = await this.apiservice.addBook(param);
      this.isLoading = false;

      if (res.data.status) {
        this.toasterService.showSuccess(res.data.message, "");
        window.location.reload();
      }
    } catch (e: any) {
      this.toasterService.showError(e.response.data.message, "");
      this.isLoading = false;

      if (e.response.status == 401) {
        this.router.navigateByUrl('/login');
      }
    }
  }
  async updateBook() {
    if (!this.booktitle) {
      this.toasterService.showWarning("Please enter book name", "");
      return;
    }
    let param = {
      booktitle: this.booktitle,
      isActive: 1,
      id: this.selectedBook._id
    }
    this.isLoading = true;

    try {
      const res = await this.apiservice.updateBook(param);
      this.isLoading = false;
      if (res.data.status) {
        this.toasterService.showSuccess(res.data.message, "");
        window.location.reload();
      }
    } catch (e: any) {
      this.toasterService.showError(e.response.data.message, "");
      this.isLoading = false;
      if (e.response.status == 401) {
        this.router.navigateByUrl('/login');
      }
    }
  }

  async deleteBook(d: any) {

    let param = {
      book: d.book,
      isActive: 0,
      id: d.id
    }
    this.isLoading = true;

    try {
      const res = await this.apiservice.deleteBook(param);
      this.isLoading = false;
      if (res.data.status) {
        this.toasterService.showSuccess('book deleted succesfully', "");
        window.location.reload();
      }
    } catch (e: any) {
      this.toasterService.showError(e.response.data.message, "");
      this.isLoading = false;
      if (e.response.status == 401) {
        this.router.navigateByUrl('/login');
      }
    }
  }

  async openLgModalAdd(content: TemplateRef<any>, d: any) {
    this.selectedBook = d
    this.booktitle = d.booktitle
    this.NgbModal.open(content, { size: 'lg' }).result.then((result: any) => {
    }).catch((res: any) => { });
  }


}
