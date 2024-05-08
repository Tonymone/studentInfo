import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from '../shared/authservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    public authService: AuthserviceService,
    public router: Router
  ) {}
  ngOnInit() {}
  GotoRegisterPage(){
    this.router.navigate(['registration']);

  }
  logIn(email: any, password: any) {
    this.authService
      .SignIn(email.value, password.value)
      .then((): any => {
          this.router.navigate(['home']);
        
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }

}
