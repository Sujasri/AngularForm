import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DonationFormComponent } from './donation-form/donation-form.component';

@NgModule({
  declarations: [
    AppComponent,
    DonationFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
