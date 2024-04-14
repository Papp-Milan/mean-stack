import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { AddNameComponent } from './components/add-name/add-name.component';
import { NameDetailsComponent } from './components/name-details/name-details.component';
import { NamesListComponent } from './components/names-list/names-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AddNameComponent,
    NameDetailsComponent,
    NamesListComponent
  ],
  imports: [
    AppRoutingModule,
    SharedModule,
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
