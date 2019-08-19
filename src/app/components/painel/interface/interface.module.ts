import { NgxSpinnerModule } from 'ngx-spinner';
import { InterfaceComponent } from './interface.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InterfaceService } from './interface.service';

@NgModule({
  imports: [
    CommonModule,
    NgxSpinnerModule,
  ],
  declarations: [
    InterfaceComponent
  ],
  exports: [
    InterfaceComponent
  ],
  providers: [InterfaceService]
})
export class InterfaceModule {}
