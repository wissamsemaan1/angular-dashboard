import { Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UserListComponent } from './user-list/user-list.component';

export const routes: Routes = [
    { path: 'users/:id', component: UserListComponent } // Detail route with dynamic ID
  ];
