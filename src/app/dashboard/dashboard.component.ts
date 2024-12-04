import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service'; // Import AuthService
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  currentComponent = 'liste-emploi'; // Example of current component view
  //loggedInUser: { username: string } | null = null; // Logged-in user's data
  loggedInUser: string | null = null;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    // Retrieve the logged-in user's data when the component initializes
    //this.loggedInUser = this.authService.getCurrentUser();
    this.loggedInUser = this.authService.getUsername();
  }

  // Method to switch components
  showComponent(component: string) {
    this.currentComponent = component;
  }

  // Logout method
  logout() {
    this.authService.logout(); // Logout the user using AuthService
  }
}
