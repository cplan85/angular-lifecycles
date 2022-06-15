import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgOnChangesComponent } from './ng-on-changes/ng-on-changes.component';
import { FormsModule } from '@angular/forms';
import { PepitoComponent } from './pepito/pepito.component';
import { VariosComponent } from './varios/varios.component';

@NgModule({
  declarations: [
    AppComponent,
    NgOnChangesComponent,
    PepitoComponent,
    VariosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
