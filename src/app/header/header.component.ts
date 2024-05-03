import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output, ViewChild, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Input() users: any[] = []; // Array to hold user data
  @Output() userSelected = new EventEmitter<any>(); // Event to emit selected user

  filteredUsers: any[] = []; // Array to hold filtered user data (copy of users)
  searchValue: string = ''; // Initialize search value to an empty string

  ngOnInit() {
    // ... (fetch user data and populate the `users` array)
    this.filteredUsers = this.users.slice(); // Create a copy for filtering
  }

  searchUser(searchTerm: string) {
    this.searchValue = searchTerm.toLowerCase(); // Ensure case-insensitive search
    this.filteredUsers = this.users.filter(user => user.id.toString().toLowerCase().includes(this.searchValue));
  }

  selectUser(user: any) {
    this.userSelected.emit(user); // Emit the selected user
  }
}