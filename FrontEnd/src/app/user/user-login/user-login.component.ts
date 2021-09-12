import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertifyService } from '../../services/alertify.service';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  constructor(private alertyfyService: AlertifyService,
              private authService: AuthenticationService,
              private alertifyService: AlertifyService,
              private router: Router) { }

  ngOnInit(): void {
  }

  onLogin(loginForm: NgForm) {
    console.log(loginForm.value);
    const token = this.authService.authUser(loginForm.value);
    if(token){
      localStorage.setItem('token',token.userName)
      this.alertifyService.success('Congrats! Login Successfull!');
      this.router.navigate(['/']);
    }
    else{
      this.alertifyService.error('Sorry! Login Failure!');
    }





    // const token = this.authService.authUser(loginForm.value);
    // this.authService.authUser(loginForm.value).subscribe(
    //     (response: UserForLogin) => {
    //         console.log(response);
    //         const user = response;
    //         if (user) {
    //             localStorage.setItem('token', user.token);
    //             localStorage.setItem('userName', user.userName);
    //             this.alertyfyService.success('Login Successful');
    //             this.router.navigate(['/']);
    //         }
    //     }
    // );
}
}
