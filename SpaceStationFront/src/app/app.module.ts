
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, /* other http imports */ } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogElementsExampleDialog } from './dialog/dialog.component'
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DialogElementsExampleDialog
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    FormsModule   
 //   HttpClient,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports:[DialogElementsExampleDialog],
  entryComponents: [DialogElementsExampleDialog ]
})
export class AppModule { }
