import { Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UserListComponent } from './user-list/user-list.component';
import {UserDetailsComponent} from './user-details/user-details.component'

export const routes: Routes = [
    { path: '', component: UserListComponent }, 
    { path: 'userinfo/:id', component: UserDetailsComponent } 
  ];

