import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  addUser(user:User){
    let Users =[];
    if(localStorage.getItem('Users')){
      Users = JSON.parse(localStorage.getItem('Users')||'');
      Users = [...Users, user];
    }else{
      Users=[user];
    }
    localStorage.setItem('Users', JSON.stringify(Users));
  }
}
