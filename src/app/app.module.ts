import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule }   from '@angular/forms';


import { AppComponent } from './app.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AuthGuard } from './auth/auth-guard.service';
import { AuthService } from './auth/auth.service';

import { MatButtonModule, MdCardModule, MdMenuModule, MdToolbarModule, MdIconModule, MatInputModule } from '@angular/material';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';


const ROUTES = [

{ path: '', redirectTo: '/login', pathMatch: 'full' },
{ path: 'login', component: LoginComponent,
    children: [
      { path: 'confirmation', component: ConfirmationComponent, canActivate: [AuthGuard]  }
    ]
  }
];


@NgModule({
  declarations: [
    AppComponent,
    ConfirmationComponent,
    LoginComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(ROUTES, { useHash: true }),
    BrowserAnimationsModule,
    MatButtonModule,
    MdMenuModule,
    MdCardModule,
    MdToolbarModule,
    MdIconModule,
    MatInputModule

  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
