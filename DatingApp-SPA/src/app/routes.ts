import { Routes } from '@angular/router';
import { MessagesComponent } from './messages/messages.component';
import { MembersComponent } from './members/members.component';
import { ListsComponent } from './lists/lists.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './guards/auth.guard';

export const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
      {
        path: 'messages',
        component: MessagesComponent,
      },
      {
        path: 'members',
        component: MembersComponent,
      },
      {
        path: 'lists',
        component: ListsComponent,
        canActivate: [AuthGuard],
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];
