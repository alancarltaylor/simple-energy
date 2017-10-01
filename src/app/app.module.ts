import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MdButtonModule, MdCardModule, MdMenuModule, MdToolbarModule, MdIconModule } from '@angular/material';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';


// const ROUTES = [
//   {
//     path: '',
//     component: AppComponent,
//     children: [
//       { path: 'confirmation', component: ConfirmationComponent  }
//     ]
//   }
// ];


@NgModule({
  declarations: [
    AppComponent,
    ConfirmationComponent,
    LoginComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    // RouterModule.forRoot(ROUTES, { useHash: true }),
    BrowserAnimationsModule,
    MdButtonModule,
    MdMenuModule,
    MdCardModule,
    MdToolbarModule,
    MdIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
