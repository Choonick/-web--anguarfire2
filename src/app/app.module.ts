import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from 'angularfire2';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
