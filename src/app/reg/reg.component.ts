import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../models/user.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from '../http-services/user.service';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent implements OnInit {

  public regForm: FormGroup;
  public hasSubmitted: boolean = false;

  get name() { return this.regForm.get('name'); }
  get age() { return this.regForm.get('age'); }
  get phone() { return this.regForm.get('phone'); }
  get gender() { return this.regForm.get('gender'); }
  get userName() { return this.regForm.get('userName'); }
  get password() { return this.regForm.get('pass'); }
  get email() { return this.regForm.get('email'); }
  get confirm() { return this.regForm.get('confirm'); }


  constructor(private fb: FormBuilder, private userService: UserService, private router: Router, public snackBar: MatSnackBar) {
    this.regForm = this.fb.group({
      age: ['', Validators.required],
      userName: ['', Validators.required],
      name: ['', Validators.required],
      phone: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern('[0-9]*$')]],
      gender: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      pass: ['', [Validators.required, Validators.minLength(6)]],
      confirm: ['', Validators.required]
    }, { validator: this.PasswordValidator });
  }
  ngOnInit(): void {
  }

  public onSubmit() {
    console.log(this.regForm)
    this.hasSubmitted = true;
    if (this.regForm.valid) {
      let user: User = {
        name: this.name?.value,
        phone: this.phone?.value,
        gender: this.gender?.value,
        username: this.userName?.value,
        password: this.password?.value,
        email: this.email?.value
      }

      // This will go to Userservice class and add the user to the existing users array in localstorage
      this.userService.addUser(user);
      this.regForm.reset();
      this.hasSubmitted = false;
      this.snackBar.open('Congrats !! you are successfully registered. Please login now.', 'Close', { duration: 2000 });
      this.router.navigate(['/login']);
    }
    else {
      this.snackBar.open('Kindly provide the required fields', 'Close', { duration: 2000 });
    }
  }
  public PasswordValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const password = control.get('pass');
    const confirmPassword = control.get('confirm');
    if (password?.pristine || confirmPassword?.pristine) {
      return null;
    }
    return password && confirmPassword && password.value != confirmPassword.value ? { 'misMatch': true } : null;
  }

}

