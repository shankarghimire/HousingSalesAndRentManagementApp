import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { User } from 'src/app/model/user';
import { UserService } from '../../services/user.service';
// import * as alertify from 'alertifyjs';
// import * as alertyfy from 'alertifyjs';
import { AlertifyService } from '../../services/alertify.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css'],
})
export class UserRegisterComponent implements OnInit {
  registerForm!: FormGroup;

  //user?: any = {};
  user!: User;

  //to set validation rules for the form submit
  userSubmitted !: boolean;

  constructor(private fb: FormBuilder,
              private userServie: UserService,
              private alertify:AlertifyService ) {}

  ngOnInit(): void {
    // this.registerForm = new FormGroup({
    //   userName: new FormControl(null,[Validators.required, Validators.minLength(2)]),
    //   email: new FormControl(null,[Validators.required, Validators.email]),
    //   password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
    //   confirmPassword: new FormControl(null, [Validators.required]),
    //   mobile: new FormControl(null, [Validators.required, Validators.maxLength(10)]),
    // }, this.passwordMatchingValidator);
    this.createRegisterForm();

    this.registerForm.controls['userName'].setValue('User Name');
  }

  createRegisterForm() {
    this.registerForm = this.fb.group(
      {
        userName: new FormControl(null, [
          Validators.required,
          Validators.minLength(2),
        ]),
        email: new FormControl(null, [Validators.required, Validators.email]),
        password: new FormControl(null, [
          Validators.required,
          Validators.minLength(8),
        ]),
        confirmPassword: new FormControl(null, [Validators.required]),
        mobile: new FormControl(null, [
          Validators.required,
          Validators.maxLength(10),
        ]),
      },
      { Validators: this.passwordMatchingValidator }
    );
  }

  //   passwordMatchingValidatior(fg: FormGroup): Validators {
  //     return fg.get('password')?.value === fg.get('confirmPassword')?.value ? null :  {notmatched: true};
  // }

  passwordMatchingValidator(fc: AbstractControl): ValidationErrors | null {
    return fc.get('password')?.value === fc.get('confirmPassword')?.value
      ? null
      : { notmatched: true };
  }

  //Getter Method for all Form Controls
  get userName() {
    return this.registerForm.get('userName') as FormControl;
  }
  get email() {
    return this.registerForm.get('email') as FormControl;
  }
  get password() {
    return this.registerForm.get('password') as FormControl;
  }
  get confirmPassword() {
    return this.registerForm.get('confirmPassword') as FormControl;
  }
  get mobile() {
    return this.registerForm.get('mobile') as FormControl;
  }

  onSubmit(): void {
    console.log(this.registerForm);
    this.userSubmitted = true;

    if (this.registerForm.valid) {
      //Assings Form data into the user object variable
      //this.user = Object.assign(this.user, this.registerForm.value);

      //stores in local storate
      //localStorage.setItem('Users', JSON.stringify(this.user));

      //Calls the method directly ie without using service
      //this.addUser(this.user);

      //Calls method of the UserService
      //this.userServie.addUser(this.user);

      //Calls the method
      this.userServie.addUser(this.userData());

      //Resets the form
      this.registerForm.reset();

      //Sets the variable to False not to display error message
      this.userSubmitted = false;

      //Show the Alertyfy message
      this.alertify.success('Congrats, you are successfully registered!');
    }else{
      this.alertify.error('Kindly provide the required fields!');
    }
  }

  userData():User{
    return this.user={
      userName : this.userName.value,
      email: this.email.value,
      password: this.password.value,
      mobile: this.mobile.value
    }

  }

  //Has been implemented int the user.service.ts class
  // addUser(user:any){
  //   let Users =[];
  //   if(localStorage.getItem('Users')){
  //     Users = JSON.parse(localStorage.getItem('Users')||'');
  //     Users = [...Users, user];
  //   }else{
  //     Users=[user];
  //   }
  //   localStorage.setItem('Users', JSON.stringify(Users));
  // }
}
