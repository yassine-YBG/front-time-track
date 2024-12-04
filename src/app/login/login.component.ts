/*import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      mot_de_passe: ['', Validators.required]
    });
  }



  onSubmit() {
    if (this.loginForm.valid) {
      this.http.post('http://localhost:8000/api/login', this.loginForm.value)
        .subscribe(response => {
          console.log('User logged in successfully!', response);
         
        }, error => {
          console.error('Error logging in', error);
        });
    }
  }

}*/
/*import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service'; // Import AuthService

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      mot_de_passe: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe(
        response => {
          console.log('User logged in successfully!', response);
          // Handle successful login
          this.authService.handleLogin(response); // Call handleLogin to set the user as logged in
        },
        error => {
          console.error('Error logging in', error);
          // Optionally, display an error message to the user
        }
      );
    }
  }
}*/

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service'; // Import AuthService

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  loginError: string | null = null; // Variable to store login error messages

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      mot_de_passe: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe(
        response => {
          console.log('User logged in successfully!', response);
          this.authService.handleLogin(response); // Call handleLogin to set the user as logged in
          this.loginError = null; // Clear any previous error messages
        },
        error => {
          console.error('Error logging in', error);
          this.loginError = 'Invalid email or password. Please try again.'; // Set error message
        }
      );
    }
  }
}


