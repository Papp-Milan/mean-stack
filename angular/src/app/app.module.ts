import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';

// App
import { AppComponent } from './app.component';

// Names
import { AddComponent } from './components/names/add/add.component';
import { DetailsComponent } from './components/names/details/details.component';
import { ListComponent } from './components/names/list/list.component';

@NgModule({
  declarations: [
    // App
    AppComponent,
    // Names
    AddComponent,
    DetailsComponent,
    ListComponent
    // Cars
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
