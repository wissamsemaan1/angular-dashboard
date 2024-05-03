import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output, ViewChild, ElementRef, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

interface User {
  id: number;
  email: string; // Add other properties based on API response
  first_name?: string; // Optional property (if applicable)
  last_name?: string; // Optional property (if applicable)
  avatar?: string; // Optional property (if applicable)
  // ... other properties
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Input() users: User[] = []; // Array to hold user data
  @Output() userSelected = new EventEmitter<User>(); // Event to emit selected user

  originalUsers: User[] = []; // Store original users fetched from the API

  constructor(private http: HttpClient) {
    this.fetchUsers();
  }

  fetchUsers() {
    this.http.get<any>('https://reqres.in/api/users').subscribe(response => {
      this.users = response.data;
      this.originalUsers = response.data; // Store original users
    });
  }

  searchUser(searchTerm: string) {
    const url = `https://reqres.in/api/users/${searchTerm}`;
    this.http.get<any>(url).subscribe(response => {
      if (response.data) {
        // If user with the given ID is found, assign it to the users array
        this.users = [response.data];
      } else {
        // If user with the given ID is not found, clear the users array
        this.users = [];
      }
    });
  }
  
}