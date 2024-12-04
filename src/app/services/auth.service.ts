// src/app/services/auth.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedIn = false; // Flag to track authentication status
  private apiUrl = 'http://localhost:8000/api';

  constructor(private http: HttpClient, private router: Router) {}

  // Method to log in the user
  login(credentials: { email: string; mot_de_passe: string }): Observable<any> {
    return this.http.post('http://localhost:8000/api/login', credentials);
  }



// Add this method to your AuthService
register(user: { nom: string; email: string; mot_de_passe: string; role: string }): Observable<any> {
  return this.http.post(`${this.apiUrl}/users/register`, user);
}

 
  // Method to handle successful login
  handleLogin(response: any) {
    this.isLoggedIn = true; // Set the flag to true on successful login
    localStorage.setItem('user', JSON.stringify(response.user)); // Assuming the response has a 'user' object
    localStorage.setItem('token', response.token); // Assuming the response has a token
    localStorage.setItem('nom', response.user.nom);

    if (response.dashboardUrl) {
      this.router.navigate([response.dashboardUrl]);}
    /*this.router.navigate(['/dashboard']); // Navigate to dashboard after login*/
  }

  // Method to log out the user
  logout() {
    this.isLoggedIn = false; // Set the flag to false on logout
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    this.router.navigate(['/login']); // Navigate to login page
  }

  // Method to check if the user is authenticated
  isAuthenticated(): boolean {
    return this.isLoggedIn; // Return the current authentication status
    return !!localStorage.getItem('token');
  }
  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user') || '{}'); // Get user from localStorage
  }

  getUsername(): string | null {
    return localStorage.getItem('nom'); // Retrieve username
  }



  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/users`);
  }
  
  updateUser(id: number, data: { nom?: string; email?: string; role?: string; mot_de_passe?: string }): Observable<any> {
    return this.http.put(`${this.apiUrl}/users/${id}`, data);
  }
  
  deleteUser(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/users/${id}`);
  }
  
}
