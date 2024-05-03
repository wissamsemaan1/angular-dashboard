import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UserListComponent } from './user-list/user-list.component';
import { Router, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', component: UserListComponent },
  { path: 'users/:id', component: UserListComponent } // Route points to UserListComponent
];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent,UserListComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  userData: any[] = [];
  title = 'angular-dashboard';

  handleUserSelection(selectedUser: any) {
    // Implement your logic to handle user selection (e.g., console.log, store in a variable)
    console.log('Selected user:', selectedUser);
  }
}
