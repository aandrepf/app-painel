import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ElectronService } from 'ngx-electron';
import { ApiService } from './../../api.service';
import { Subscription } from 'rxjs';
import { interval } from 'rxjs';
import { Painelv2 } from 'src/app/models/painel.model';
import { NgxSpinnerService } from 'ngx-spinner';
import { trigger, transition, useAnimation } from '@angular/animations';
import { pulse, zoomIn } from 'ng-animate';
import { Router } from '@angular/router';
import * as senhas from './../../global';

export enum ENOperation {
  iniciando = 1,
  conectando = 2,
  conectado = 3,
  desligando = 4
}

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css'],
  animations: [
    trigger('pulse', [transition('* => *', useAnimation(pulse, { params: { timing: 0.5, delay: 0.7, scale: 1.1 } }))]),
    trigger('zoomIn', [transition('* => *', useAnimation(zoomIn, { params: { timing: 0.5, delay: 0.7} }))])
  ],
})
export class PainelComponent implements OnInit, OnDestroy {
  @Input() painel: Painelv2;
  private _subPainel: Subscription;
  // public painel;
  public pulse = false;
  public zoomIn = false;
  public timer;
  public attentionSeekers = ['pulse', 'zoomIn'];
  public isConectado = null;
  public state;

  constructor(private _api: ApiService, private spinner: NgxSpinnerService, private _route: Router, private electron: ElectronService) {}

  ngOnInit() {
    localStorage.clear();

    // --- PARA TESTES ---
    /*
      this.state = ENOperation.conectado;
      this.isConectado = true;
      this.painel = senhas.GER2;
    */

    this.spinner.show();
    const source = interval(1 * 1000); // 10 - DEV / 1 - PROD
    this._subPainel = source.subscribe(() => {
      this._api.getPainel();

      const info = JSON.parse(localStorage.getItem('info'));
      const chamou = JSON.parse(localStorage.getItem('chamou'));

      // INICIANDO APLICAÇÃO
      if(Object.prototype.toString.call(info) == '[object Null]' && chamou === null) {
        this.state = ENOperation.iniciando;
        this.isConectado = null;
        console.log('STATE INICIANDO APP', this.state);
      }

      // FASE DE CONEXÃO
      if(Object.prototype.toString.call(info) == '[object Null]' && chamou === false) {
        this.state = ENOperation.conectando;
        this.isConectado = false;
        console.log('STATE CONECTANDO', this.state);
      }

      // FASE DE CONECTADO e CHAMADA DE SENHA
      if(Object.prototype.toString.call(info) == '[object Object]') {
        this.state = ENOperation.conectado;
        this.isConectado = true;
        if (chamou) {
          if (info.hasOwnProperty('codcli') === true) {
            setTimeout(() => {
              this.painel = info;
              localStorage.removeItem('tempos');
              // if (this.painel) {
                // this.electron.ipcRenderer.send('com', 'tocar');
              // }
              this.animate('pulse');
              this.animate('zoomIn');
              this.spinner.hide();
            }, 2000);
          }
          console.log('STATE CONECTADO CHAMOU', this.state);
        } else {
          localStorage.setItem('chamou', 'false');
          if(info.hasOwnProperty('stx_xts')) {
            this.isConectado = info.stx_xts;
            this.state = ENOperation.conectado;
          }
          if(info.hasOwnProperty('desligar')) {
            this.painel = null;
            this.isConectado = null;
            this.state = ENOperation.desligando;
          }
          console.log('STATE CONECTADO NÃO CHAMOU', this.state);
        }
      }
    });
  }

  ngOnDestroy() {
    if (this._subPainel !== undefined) { this._subPainel.unsubscribe(); }
  }

  animate(name: string) {
    this[name] = !this[name];
  }
}
