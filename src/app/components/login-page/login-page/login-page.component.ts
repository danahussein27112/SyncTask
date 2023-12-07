import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../http-services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

    public loginForm: FormGroup;
    public hasSubmitted: boolean = false;
  
    get username(){ return this.loginForm.get('username'); }
    get password(){ return this.loginForm.get('password'); }
  
    constructor(private fb: FormBuilder, private authService: AuthService, private router : Router, private snackBar :MatSnackBar) {
      this.loginForm = this.fb.group({
        username : ['',[Validators.required, Validators.pattern("^[a-zA-Z0-9\-]+$")]],
        password : ['',[Validators.required, Validators.minLength(6)]]
      });
    }
    ngOnInit(): void { }
  
    onSubmit() {
        this.hasSubmitted = true;
        const token = this.authService.authUser(this.loginForm.value);
        if (this.loginForm.valid) {
          if(token){ //if user have some value it will check and validate
            localStorage.setItem('token',token.username);
            this.snackBar.open('You have logged in successfully','Close',{duration:2000});
            this.router.navigate(['/products']);
          }
          else{ //if user is null or incorrect
            this.snackBar.open('Username or Password is wrong','Close',{duration:2000});
          }
          this.loginForm.reset();
          this.hasSubmitted = false;
        }
        else{
          this.snackBar.open('Kindly fill required fields','Close',{duration:2000});
        }
      }
  
  }
  