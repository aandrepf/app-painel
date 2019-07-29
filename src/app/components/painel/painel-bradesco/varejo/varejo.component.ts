import { Component, Input, OnChanges } from '@angular/core';
import { Painelv2 } from 'src/app/models/painel.model';
import { trigger, transition, useAnimation } from '@angular/animations';
import { pulse, zoomIn, flash } from 'ng-animate';

@Component({
  selector: 'app-varejo',
  templateUrl: './varejo.component.html',
  styleUrls: ['./varejo.component.css'],
  animations: [
    trigger('pulse', [transition('* => *', useAnimation(pulse, { params: { timing: 0.5, delay: 0.7, scale: 1.1 } }))]),
    trigger('zoomIn', [transition('* => *', useAnimation(zoomIn, { params: { timing: 0.5, delay: 0.7} }))]),
    trigger('flash', [transition('* => *', useAnimation(flash, { params: { timing: 0.5, delay: 0.7} }))])
  ],
})
export class VarejoComponent implements OnChanges {
  @Input() painelVarejo: Painelv2;
  public pulse = false;
  public zoomIn = false;
  public flash = false;
  public attentionSeekers = ['pulse', 'zoomIn'];

  ngOnChanges() {
    console.log('É FILA UNICA?', this.painelVarejo.isFilaUnica);
    console.log('PAINEL JSON VAREJO? ', this.painelVarejo);
    if (this.painelVarejo) {
      this.animate('flash');
      this.animate('zoomIn');
    }
  }

  animate(name: string) {
    this[name] = !this[name];
  }
}
