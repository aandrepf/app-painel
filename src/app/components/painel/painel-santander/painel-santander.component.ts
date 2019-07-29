import { Component, Input, OnChanges } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { pulse, zoomIn, flash } from 'ng-animate';

import { Painel } from 'src/app/models/painel.model';

@Component({
  selector: 'app-painel-santander',
  templateUrl: './painel-santander.component.html',
  styleUrls: ['./painel-santander.component.css'],
  animations: [
    trigger('pulse', [transition('* => *', useAnimation(pulse, { params: { timing: 0.5, delay: 0.7, scale: 1.1 } }))]),
    trigger('zoomIn', [transition('* => *', useAnimation(zoomIn, { params: { timing: 0.8, delay: 1.0} }))]),
    trigger('flash', [transition('* => *', useAnimation(flash, { params: { timing: 0.8, delay: 1.0} }))])
  ],
})
export class PainelSantanderComponent implements OnChanges {
  @Input() painelSantander: Painel;
  public pulse = false;
  public zoomIn = false;
  public flash = false;
  public attentionSeekers = ['pulse', 'zoomIn'];

  ngOnChanges() {
    if (this.painelSantander) {
      this.animate('flash');
      this.animate('zoomIn');
    }
  }

  animate(name: string) {
    this[name] = !this[name];
  }

}
