import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserComponent } from './user.component';
import { UserSalutationService } from './Service/user-salutation.service';
import { LoggingService } from "./Service/logging.service";

@NgModule({
  declarations: [
    AppComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [UserSalutationService, LoggingService], //  Calling this service globally.
  bootstrap: [UserComponent]
})
export class AppModule { }
