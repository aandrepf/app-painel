import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { ApiService } from './api.service';

import { ROUTES } from './app.routes';
import { PainelModule } from './components/painel/painel.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    PainelModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
