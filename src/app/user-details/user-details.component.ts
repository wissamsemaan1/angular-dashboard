import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { HttpHandler } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-user-details',
  standalone: true,
  // imports: [],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css',
  imports: [CommonModule , HttpClientModule, RouterLink],
  providers: [HttpClient] 
})
export class UserDetailsComponent implements OnInit {
  user: any; // Replace 'any' with a User interface if you have one

  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    const userIdString = this.activatedRoute.snapshot.paramMap.get('id');
  
    if (userIdString) {
      const userId = parseInt(userIdString, 10);
      this.getUserById(userId);
    } else {
    
    }
  }

  getUserById(userId: number) {
    const url = `https://reqres.in/api/users/${userId}`;
    this.http.get<any>(url).subscribe((response) => {
      this.user = response.data;
    });
  }

}
