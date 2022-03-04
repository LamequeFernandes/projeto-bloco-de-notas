import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';

import { NavComponent } from './components/template/nav/nav.component';
import { HomeComponent } from './views/home/home.component';
import { NotepadComponent } from './views/notepad/notepad.component';
import { AppRoutingModule } from './app-routing.module'

import { RouterModule } from '@angular/router';
import { NoteCreateComponent } from './components/note/note-create/note-create.component';
import { HttpClientModule } from '@angular/common/http';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button'
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    HomeComponent,
    NotepadComponent,
    NoteCreateComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    MatButtonModule,
    MatSnackBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
