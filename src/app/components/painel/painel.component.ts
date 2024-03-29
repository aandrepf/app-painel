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
import { InterfaceService } from './interface/interface.service';

export enum ENOperation {
  iniciando = 1,
  conectando = 2,
  conectado = 3,
  desligando = 4,
  interface = 5,
  wating = 6
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
  @Input() interfaceContent: any;
  private _subPainel: Subscription;
  // public painel;
  public pulse = false;
  public zoomIn = false;
  public timer;
  public attentionSeekers = ['pulse', 'zoomIn'];
  public isConectado = null;
  public isInterface = false;
  public state;

  constructor(
    private _interface: InterfaceService, private _api: ApiService, private spinner: NgxSpinnerService, private _route: Router, private electron: ElectronService) {}

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
      const rede = JSON.parse(localStorage.getItem('rede'));
      const chamou = JSON.parse(localStorage.getItem('chamou'));

      // INICIANDO APLICAÇÃO
      if(Object.prototype.toString.call(info) == '[object Null]' && chamou === null) {
        this.state = ENOperation.iniciando;
        this.isConectado = null;
        console.log('STATE INICIANDO APP', this.state);
      }

      // FASE DE CONEXÃO
      if(Object.prototype.toString.call(info) == '[object Null]' && chamou === false && rede === null) {
        this.state = ENOperation.conectando;
        this.isConectado = false;
        console.log('STATE CONECTANDO', this.state);
      }

      // FASE AGUARDANDO INTERAÇÃO
      if(Object.prototype.toString.call(info) == '[object Null]' && rede === true) {
        this.state = ENOperation.wating;
        this.isConectado = true;
        console.log('STATE AGUARDANDO', this.state);
      }

      // FASE DE CONECTADO e CHAMADA DE SENHA
      if(Object.prototype.toString.call(info) == '[object Object]') {
        this.state = ENOperation.conectado;
        this.isConectado = true;

        // VERIFICA SE TEM INTERFACE
        if(info.hasOwnProperty('interface')) {
          localStorage.setItem('chamou', 'true');
          setTimeout(() => {
            this.isInterface = true;
            this.interfaceContent = info.interface;
            this.spinner.hide();
          }, 2000);
        } else {
          if (chamou) {
            if (info.hasOwnProperty('codcli') === true) {
              this.painel = info;
              localStorage.removeItem('tempos');
              this.animate('pulse');
              this.animate('zoomIn');
              this.spinner.hide();
              setTimeout(() => {
                this.playAudio(this.painel.dadosSenha.senha, this.painel.dadosSenha.tipoCaixa, this.painel.dadosSenha.caixa);
              }, 300);
            }
          } else {
            localStorage.setItem('chamou', 'false');
            if(info.hasOwnProperty('stx_xts')) {
              this.isConectado = info.stx_xts;
              this.state = ENOperation.conectado;
            }
          }
        }
      }
    });
  }

  ngOnDestroy() {
    if (this._subPainel !== undefined) { this._subPainel.unsubscribe(); }
  }

  playAudio(senha: string, tipoCaixa: string, posicao: string){
    let audio = new Audio();
    audio.src = './assets/!.mp3';
    audio.defaultPlaybackRate = 1.2;
    audio.load();
    audio.play();
    /*let cut = senha.split('');
    let audio = new Audio();
    let i = 0;
    let playlist = [
      "./assets/!.mp3",
      "./assets/sounds/senha.mp3",
      "./assets/sounds/"+cut[0]+".mp3",
      "./assets/sounds/"+cut[1]+".mp3",
      "./assets/sounds/"+cut[2]+".mp3",
      "./assets/sounds/"+cut[3]+".mp3",
      "./assets/sounds/"+cut[4]+".mp3"
    ];
    audio.addEventListener('ended', function () {
      if(++i < playlist.length) {
        i = i;
      } else {
        false;
      }
      audio.src = playlist[i];
      audio.play();
    }, true);
    audio.src = playlist[0];
    audio.defaultPlaybackRate = 1.2;
    audio.play();*/

  }

  animate(name: string) {
    this[name] = !this[name];
  }
}
