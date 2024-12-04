  import { Component, OnInit } from '@angular/core';
  import { AuthService } from '../services/auth.service';

  @Component({
    selector: 'app-admin-dashboard',
    templateUrl: './admin-dashboard.component.html',
    styleUrls: ['./admin-dashboard.component.css']
  })
  export class AdminDashboardComponent implements OnInit {
    users: any[] = [];
    isLoading = true; // Loading spinner flag
    selectedUser: any = null; // For updating user details
    loggedInUser: string | null = null;
    currentComponent: string = 'admin-dashboard'; 

    constructor(private authService: AuthService) {}

    ngOnInit(): void {
      this.loadUsers();
      this.loggedInUser = this.authService.getUsername();
    }


    showComponent(component: string) {
      this.currentComponent = component;
    }
    // Load all users
    loadUsers(): void {
      this.isLoading = true;
      this.authService.getUsers().subscribe(
        (users) => {
          this.users = users;
          this.isLoading = false;
        },
        (error) => {
          console.error('Error fetching users:', error);
          this.isLoading = false;
        }
      );
    }

    // Delete a user
    deleteUser(id: number): void {
      if (confirm('Are you sure you want to delete this user?')) {
        this.authService.deleteUser(id).subscribe(
          () => {
            this.users = this.users.filter((user) => user.id !== id); // Update UI
            alert('User deleted successfully!');
          },
          (error) => {
            console.error('Error deleting user:', error);
            alert('Failed to delete user.');
          }
        );
      }
    }

    // Set user for update
    setUserForUpdate(user: any): void {
      this.selectedUser = { ...user }; // Clone the user object to avoid direct binding
    }

    // Update user details
    updateUser(): void {
      if (this.selectedUser) {
        const { id, nom, email, role, mot_de_passe } = this.selectedUser;
        this.authService.updateUser(id, { nom, email, role, mot_de_passe }).subscribe(
          () => {
            alert('User updated successfully!');
            this.selectedUser = null; // Clear the selection
            this.loadUsers(); // Refresh the user list
          },
          (error) => {
            console.error('Error updating user:', error);
            alert('Failed to update user.');
          }
        );
      }
    }


    logout() {
      this.authService.logout(); // Logout the user using AuthService
    }
    
  
  }
