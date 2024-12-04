import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';  // Adjust the path as needed
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',  // Your HTML template
  styleUrls: ['./register.component.css']    // Your CSS file
})
export class RegisterComponent {
  user = {
    nom: '',
    email: '',
    mot_de_passe: '',
    role: ''
  };
  errorMessage: string | null = null; // To display any error message

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(): void {
    if (this.user.nom && this.user.email && this.user.mot_de_passe && this.user.role) {
      this.authService.register(this.user).subscribe(
        (response) => {
          // You can handle the success response here if you want
          console.log('User registered successfully:', response);
          // Optionally you can redirect the user to the login page
          this.router.navigate(['/login']);
        },
        (error) => {
          // Handle registration error
          console.error('Error during registration:', error);
          this.errorMessage = 'Registration failed. Please try again.';
        }
      );
    } else {
      this.errorMessage = 'All fields are required!';
    }
  }
}
