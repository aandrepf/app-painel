import { Component, Input, OnChanges } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { pulse, zoomIn } from 'ng-animate';

import { Painelv2 } from './../../../models/painel.model';

@Component({
  selector: 'app-painel-itau',
  templateUrl: './painel-itau.component.html',
  styleUrls: ['./painel-itau.component.css'],
  animations: [
    trigger('pulse', [transition('* => *', useAnimation(pulse, { params: { timing: 0.5, delay: 0.7, scale: 1.1 } }))]),
    trigger('zoomIn', [transition('* => *', useAnimation(zoomIn, { params: { timing: 0.5, delay: 0.7} }))])
  ],
})
export class PainelItauComponent implements OnChanges {
  @Input() painelItau: Painelv2;
  public pulse = false;
  public zoomIn = false;
  public attentionSeekers = ['pulse', 'zoomIn'];

  ngOnChanges() {
    if (this.painelItau) {
      this.animate('pulse');
      this.animate('zoomIn');
    }
  }

  animate(name: string) {
    this[name] = !this[name];
  }
}
