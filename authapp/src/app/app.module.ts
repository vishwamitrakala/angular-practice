import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';


import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { AuthGuard } from './auth.service';
import { routes } from './app.routes';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { EmailComponent } from './email/email.component';
import { SignupComponent } from './signup/signup.component';
import { MembersComponent } from './members/members.component';

export const firebaseConfig = {
	
	apiKey: "AIzaSyBhdM0o1GtN2BiSEXNpgWhxlz9JnpXjpjM",
    authDomain: "newcp-3edc2.firebaseapp.com",
    databaseURL: "https://newcp-3edc2.firebaseio.com",
    projectId: "newcp-3edc2",
    storageBucket: "",
    messagingSenderId: "302074265006"
  
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmailComponent,
    SignupComponent,
    MembersComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    routes,
    AngularFireModule.initializeApp(firebaseConfig)    
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
