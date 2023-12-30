import { Component } from '@angular/core';

import { HR2NavItems, HRNavItems, HiringManagerNavItems,UserNavItems, SuperadminNavItems } from './_nav';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.scss'],
})
export class DefaultLayoutComponent {

  public navItems: any;

  userData: any = localStorage.getItem('userDetails');
  userDetails: any = JSON.parse(this.userData);

  constructor() {
    if (this.userDetails.role == "Superadmin") {
      this.navItems = SuperadminNavItems;
    }
    // if (this.userDetails.role == "HiringManager") {
    //   this.navItems = HiringManagerNavItems;
    // }
    // if (this.userDetails.role == "HR-Level-1") {
    //   this.navItems = HRNavItems;
    // }
    // if (this.userDetails.role == "HR-Level-2") {
    //   this.navItems = HR2NavItems;
    // }
    if (this.userDetails.role == "User") {
      this.navItems = UserNavItems;
    }
    // if (this.userDetails.role == "Recruiter") {
    //   this.navItems = RecruiterNavItems;
    // }
  }
}
