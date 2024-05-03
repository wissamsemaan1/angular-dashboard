import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { HttpHandler } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Router, RouterLink } from '@angular/router';

interface User {
  id: number;
  name: string;
  imageUrl: string; // Add this property
}

@Component({
  selector: 'app-user-list',
  standalone: true,
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  imports: [CommonModule , HttpClientModule, RouterLink],
  providers: [HttpClient] 
})
export class UserListComponent implements OnInit {
  @Input() userId: number | undefined;
  users: any[] = [];

  constructor(private http: HttpClient,
    private router: Router,
  ) { }

  ngOnInit() {
    this.fetchUsers();
  }

  fetchUsers() {
    const page = 1; // Initial page
    this.http.get<any>(`https://reqres.in/api/users?page=${page}`).subscribe(response => {
      this.users = response.data;
    });
  }

  onUserSelected(userId: number) {
    this.router.navigate(['/users', userId]); // Navigate to user details page
  }
  
}