import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from '../shared/authservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage   {
  constructor(
    public authService: AuthserviceService,
    public router: Router
  ) {}
  ngOnInit() {}
  signUp(name :any,email: any, password: any) {
    this.authService
      .RegisterUser(name.value,email.value, password.value)
      .then((res) => {
        alert("Account Create successfully");
        this.router.navigate(['login']);
        alert("moved to login page");
      })
      .catch((error) => {
        window.alert(error.message +"this from here");
      });
  }
  

}
