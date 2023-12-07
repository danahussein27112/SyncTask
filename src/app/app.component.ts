import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Portal';
  constructor(private router : Router){ }
  public loggedInUser!:string;

  loggedIn(){
    const loggedInUser = localStorage.getItem('token');
    if(loggedInUser){
      this.loggedInUser = loggedInUser;
    }
    return this.loggedInUser;

  }

  onLogout(){
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }
}
