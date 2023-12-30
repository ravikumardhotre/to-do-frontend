import { Component, OnInit, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiserviceService } from 'src/app/services/apiservice.service';
import { UtilService } from 'src/app/services/util.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToasterService } from 'src/app/services/toaster.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent {
tasks: any;
dtOptions: DataTables.Settings = {};
dtTrigger: Subject<any> = new Subject();
taskName: any;
status: any = 'Pending';
  selectedTask: any;


// dtOptions: ADTSettings;
// dtTrigger: Subject<ADTSettings>;

userData: any = localStorage.getItem('userDetails');
  userDetails: any = JSON.parse(this.userData);

constructor(private router: Router, private NgbModal: NgbModal, private utilservice: UtilService, private apiservice: ApiserviceService, public toasterService: ToasterService) {

}
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
  this.toDoList();
}
async toDoList(){
  try {
    const res = await this.apiservice.getToDoList({createdBy: this.userDetails._id});
    this.tasks = res.data.data;
    this.dtTrigger.next('');
    console.log(this.tasks)

  } catch (error:any) {
    this.toasterService.showError(error.response.data.message,"");
    if(error.response.status == 401){
      this.router.navigateByUrl('/login');
    }
  }
}

async addTask(){
  if(!this.taskName){
    this.toasterService.showWarning("Please Enter Task Name","");
    return;
  }
let param = {
  taskName : this.taskName,
  status : this.status,
  createdBy: this.userDetails._id
}


try {
  const res = await this.apiservice.addTask(param);

if(res.data.status){
  this.toasterService.showSuccess(res.data.message,"");
  window.location.reload();
}


} catch (error:any) {
  this.toasterService.showError(error.response.data.message,"");
  if(error.response.status == 401){
    this.router.navigateByUrl('/login');
  }
 
}
}

async updateTask(){
  if(!this.taskName){
    this.toasterService.showWarning("Please Enter Task Name","");
    return;
  }
  let param = {
    taskName : this.taskName,
    status : this.status,
    id : this.selectedTask._id
}
try {
  const res = await this.apiservice.updateTask(param);
if(res.data.status){
    this.toasterService.showSuccess(res.data.message,"");
    window.location.reload();
  }
} catch (error:any) {
  this.toasterService.showError(error.response.data.message, "");
  if (error.response.status == 401) {
    this.router.navigateByUrl('/login');
  }
}





}

async deleteTask(t: any) {

  let param = {
   taskName: t.taskName,
    isActive: 0,
    id: t._id
  }
  try {
    const res = await this.apiservice.deleteTask(param);
    if(res.data.status){
      this.toasterService.showSuccess('Task deleted succesfully', "");
      window.location.reload();
    }
  } catch (error: any) {
    this.toasterService.showError(error.response.data.message, "");
   if (error.response.status == 401) {
      this.router.navigateByUrl('/login');
    }
  }
}

async openLgModalAdd(content: TemplateRef<any>, t: any) {
  this.selectedTask = t
  this.taskName = t.taskName
  this.status = t.status
  this.NgbModal.open(content, { size: 'lg' }).result.then((result: any) => {
  }).catch((res: any) => { });
}


}
