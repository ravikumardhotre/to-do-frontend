import { Component, OnInit } from '@angular/core';
import { UtilService } from 'src/app/services/util.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiserviceService } from 'src/app/services/apiservice.service';
import { ToasterService } from 'src/app/services/toaster.service';
@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent {
  isLoading:boolean=false;

  firstName: any;
  lastName: any;
  emailId: any;
  passwordStr: any;
  roleSelect: any = '0';
  inValidEmail: boolean = false;
  constructor(private router: Router, private utilservice: UtilService, private apiservice: ApiserviceService, public toasterService: ToasterService) { }
  ngOnInit(): void {
  }
  async createUser() {
    if (!this.firstName) {
      this.toasterService.showWarning("Please enter first name", "");
      return;
    }
    if (!this.lastName) {
      this.toasterService.showWarning("Please enter last name", "");
      return;
    }
    if (!this.emailId) {
      this.toasterService.showWarning("Please enter email id", "");
      return;
    }
    // const validateEmail = await this.utilservice.validateEmailDomain(this.emailId);
    // if (!validateEmail) {
    //   this.inValidEmail = true
    //   this.toasterService.showWarning("Please enter valid email id", "");
    //   return;
    // }
    this.inValidEmail = false
    if (!this.passwordStr) {
      this.toasterService.showWarning("Please enter password", "");
      return;
    }
    const validatePassword = await this.utilservice.validatePassword(this.passwordStr);
    if (!validatePassword) {
      this.toasterService.showWarning("Password field need minimum 8 characters in length and At least one uppercase and At least one lowercase and At least one digit and At least one special character", "");
      return;
    }

    // if (!this.roleSelect || this.roleSelect == '0') {
    //   this.toasterService.showWarning("Please select user role", "");
    //   return;
    // }
    let param = {
      firstName: this.firstName,
      lastName: this.lastName,
      emailId: this.emailId,
      password: this.passwordStr,
      mobileNo: '1111111111',
      role: 'Superadmin',
    }
    this.isLoading = true;

    try {
      const res = await this.apiservice.addUser(param);
      this.isLoading = false;

      if (res.data.status) {
        this.toasterService.showSuccess(res.data.message, "");
        window.location.reload();
      }
    } catch (e: any) {
      this.toasterService.showError(e.response.data.message,"");
      this.isLoading = false;

      if (e.response.status == 401) {
        this.router.navigateByUrl('/login');
      }
    }
  }
}
