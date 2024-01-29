import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { LowerComponent } from './components/lower/lower.component';
import { HigherComponent } from './components/higher/higher.component';
import { GuessComponent } from './components/guess/guess.component';

@NgModule({
  declarations: [AppComponent, LowerComponent, HigherComponent, GuessComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
