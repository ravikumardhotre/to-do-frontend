import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { ClassToggleService, HeaderComponent } from '@coreui/angular';

@Component({
  selector: 'app-default-header',
  templateUrl: './default-header.component.html',
})
export class DefaultHeaderComponent extends HeaderComponent {

  @Input() sidebarId: string = "sidebar";

//   userData: any = localStorage.getItem('userDetails');
//   userDetails: any = JSON.parse(this.userData);
// console.log(userDetails)
  public newMessages = new Array(4)
  public newTasks = new Array(5)
  public newNotifications = new Array(5)
  userData:any
  userDetails: any;

  constructor(private classToggler: ClassToggleService) {
    super();
  }

  ngOnInit(): void {
    this.userData = localStorage.getItem('userDetails');
    this.userDetails= JSON.parse(this.userData);
  console.log(this.userDetails)
  }

}
