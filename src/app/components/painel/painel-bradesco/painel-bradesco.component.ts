import { Component, Input } from '@angular/core';
import { Painelv2 } from 'src/app/models/painel.model';

@Component({
  selector: 'app-painel-bradesco',
  templateUrl: './painel-bradesco.component.html',
  styleUrls: ['./painel-bradesco.component.css'],
})
export class PainelBradescoComponent {
  @Input() painelBradesco: Painelv2;
}
