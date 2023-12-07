import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  authUser(user: User){
    let userArray = [];
    const storedValue: string | null = localStorage.getItem('users');

    if(storedValue){
      userArray = JSON.parse(storedValue);
    }
    //find the specific element in array using parameter of arrow function 
    // if match exists, it return filtered record, otherwise undefined
    return userArray.find((p: { username: string; password: string; }) => 
        p.username === user.username && p.password === user.password);
  }

  isLoggedIn(){
    // If token exists return true, else return false.
    return !!localStorage.getItem('token');
  }
}
