import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PainelComponent } from './painel.component';

import { NgxSpinnerModule } from 'ngx-spinner';
import { PainelSantanderComponent } from './painel-santander/painel-santander.component';
import { PainelItauComponent } from './painel-itau/painel-itau.component';
import { PainelBradescoComponent } from './painel-bradesco/painel-bradesco.component';
import { VarejoComponent } from './painel-bradesco/varejo/varejo.component';
import { GerenteComponent } from './painel-bradesco/gerente/gerente.component';
import { NgxElectronModule } from 'ngx-electron';
import { NgxPaginationModule } from 'ngx-pagination';
import { TruncarPipe } from 'src/app/truncar.pipe';

@NgModule({
  imports: [
    CommonModule,
    NgxSpinnerModule,
    NgxElectronModule,
    NgxPaginationModule
  ],
  declarations: [
    PainelComponent,
    PainelSantanderComponent,
    PainelItauComponent,
    PainelBradescoComponent,
    VarejoComponent,
    GerenteComponent,
    TruncarPipe
  ],
  exports: [
    PainelComponent
  ]
})
export class PainelModule { }
