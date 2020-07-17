import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MyValueComponent } from './my-value/my-value.component';
import { NavComponent } from './nav/nav.component';
import { AuthService } from './_services/auth.service';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { ErrorInterceptorProvider } from './_services/error.interceptor';
import { AlertifyService } from './_services/alertify.service';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MessagesComponent } from './messages/messages.component';
import { MembersComponent } from './members/members.component';
import { ListsComponent } from './lists/lists.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';

@NgModule({
  declarations: [
    AppComponent,
    MyValueComponent,
    NavComponent,
    HomeComponent,
    RegisterComponent,
    MessagesComponent,
    MembersComponent,
    ListsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BsDropdownModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
  ],
  providers: [AuthService, ErrorInterceptorProvider, AlertifyService],
  bootstrap: [AppComponent],
})
export class AppModule {}
