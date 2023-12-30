import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor() { }

  async validateEmailDomain(email:any) { 
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(email)){
        //Email valid. Procees to test if it's from the right domain (Second argument is to check that the string ENDS with this domain, and that it doesn't just contain it)
        if(email.indexOf("@gegadyne.com", email.length - "@gegadyne.com".length) !== -1){
            return true;
        }else{
          return false;
        }
    }else{
      return false;
    }
  }

  async validateGegaEmailDomain(email:any) { 
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(email)){
        //Email valid. Procees to test if it's from the right domain (Second argument is to check that the string ENDS with this domain, and that it doesn't just contain it)
        if(email.indexOf("@gegadyne.com", email.length - "@gegadyne.com".length) !== -1){
            return false;
        }else{
          return true;
        }
    }else{
      return false;
    }
  }

  async validateEmail(email: any) {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  async validatePassword(password: any) {
    return String(password)
      .match(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,20}$/
      );
  };

  async IsMobileNumber(mobNo: any) {
    var mob = /^[1-9]{1}[0-9]{9}$/;
    if (mob.test(mobNo) == false) {
      return false;
    }
    return true;
  }

  async checkUserAge(date: any) {
    if (date.length != 10 || date.indexOf("-") < 0) {
      return false;
    }
    // get Age
    var nowDate = new Date();
    var birth = new Date(date);

    var now = nowDate.getFullYear();
    var my = birth.getFullYear();
    var myAge = now - my - 1;

    if (myAge < 18) {
      return false;
    } else if (myAge < 0) {
      return false;
    } else {
      return true;
    }
  }
}
