import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserIdleModule } from 'angular-user-idle';

import { AppComponent } from './app.component';

import { ApiService } from './api.service';

import { ROUTES } from './app.routes';
import { PainelModule } from './components/painel/painel.module';
import { NgxElectronModule } from 'ngx-electron';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    PainelModule,
    HttpClientModule,
    NgxElectronModule,
    RouterModule.forRoot(ROUTES),
    // idle: 10 segundos, timeout: 15 segundos, ping: 120 segundos
    UserIdleModule.forRoot({idle: 15, timeout: 15, ping: 120})
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule {}
