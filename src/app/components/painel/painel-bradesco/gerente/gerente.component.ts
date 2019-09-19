import { map } from 'rxjs/operators';
import { DadoSenha } from './../../../../models/painel.model';
import { Component, OnInit, Input, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { Painelv2 } from 'src/app/models/painel.model';
import { trigger, transition, useAnimation } from '@angular/animations';
import { pulse, zoomIn, flash } from 'ng-animate';
import { Router } from '@angular/router';
import { interval, Subscription, Observable, timer } from 'rxjs';

@Component({
  selector: 'app-gerente',
  templateUrl: './gerente.component.html',
  styleUrls: ['./../painel-bradesco.component.css', './gerente.component.css'],
  animations: [
    trigger('pulse', [transition('* => *', useAnimation(pulse, { params: { timing: 0.5, delay: 0.7, scale: 1.1 } }))]),
    trigger('zoomIn', [transition('* => *', useAnimation(zoomIn, { params: { timing: 0.8, delay: 1.0} }))]),
    trigger('flash', [transition('* => *', useAnimation(flash, { params: { timing: 0.8, delay: 1.0} }))])
  ],
})
export class GerenteComponent implements OnInit, OnChanges, OnDestroy {
  @Input() painelGerencial: Painelv2;
  private _subGerencial: Subscription;
  private _subCronometro: Subscription;
  public pulse = false;
  public zoomIn = false;
  public flash = false;
  public attentionSeekers = ['pulse', 'zoomIn'];
  public page = 1;
  public config;
  public lastPage: number;
  public totalR: number;
  public contentPainel: number;
  public ultimaAtualizacao = new Date();
  public data;
  public senhaSort: DadoSenha[];
  public tempoFormatado = [];

  constructor(private router: Router) {
    this.config = {
      currentPage: this.page,
      itemsPerPage: 6
    };
    this.data = new Date();
    console.log('hora atual', this.data.toString().substring(16, 24));
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.painelGerencial) {
      if(this.painelGerencial.senhas.length === 0) {
        this.contentPainel = 0;
      } else {
        this.contentPainel = this.painelGerencial.senhas.length;
        this.atualizaHora(changes.painelGerencial.currentValue);

        // ORDENA OS CARDS POR TEMPO DE ESPERA MAIS CRITICO
        this.senhaSort = this.painelGerencial.senhas.map((item: DadoSenha) => {
          let valorTE = item.te.split(':');
          var tempo = (+valorTE[0]) * 60 * 60 + (+valorTE[1]) * 60 + (+valorTE[2]);
          item.te = tempo;
          return item;
        }).sort((a:DadoSenha, b:DadoSenha) => {
          return b.te - a.te;
        });

        console.log(this.senhaSort);

        this.tempoFormatado = this.senhaSort.map(item => {
          return new Date(0, 0, 0, 0, 0, item.te, 0).toString().substring(16, 24);
        });
        // FAZ O CALCULO PARA MONTAR A PAGINAÇÃO
        const quocient = parseInt(String ( this.painelGerencial.senhas.length / this.config.itemsPerPage ) );
        const rest = this.painelGerencial.senhas.length % this.config.itemsPerPage;
        rest === 0 ? this.totalR =  quocient + 0 : this.totalR = quocient + 1;
      }
    }
  }

  ngOnInit() {
    const source = interval(50 * 1000);
    this._subGerencial = source.subscribe(
    () => {
      this.animate('pulse');
      if (this.config.currentPage === 1 || this.config.currentPage > 1) {
        this.config.currentPage += 1;
      }
      if(this.painelGerencial.senhas.length > 1){
        setTimeout(() => {
          if (this.config.currentPage === this.totalR) {
            this.config.currentPage = 1;
          }
        }, 25 * 1000); // em 20 segundos retorna para primeira lista
      } else {
        this.config.currentPage = 1;
      }
    });
  }

  ngOnDestroy() {
    this._subGerencial !== undefined
      this._subGerencial.unsubscribe();

    this._subCronometro !== undefined
      this._subCronometro.unsubscribe();
  }

  atualizaHora(changes) {
    if(changes) {
      this.data = new Date();
      console.log('hora atual', this.data.toString().substring(16, 24));
    }
  }

  corTempoEspera(cor: number) {
    switch(cor) {
      case 1:
        return '0px solid';
      case 2:
        return '7px solid #c8a415'
      case 3:
        return '7px solid #c62828'
    }
  }

  corEspera(cor: number) {
    switch(cor) {
      case 1:
        return '#070707';
      case 2:
        return '#c8a415'
      case 3:
        return '#c62828'
    }
  }

  pageChange(newPage: number) {
    this.router.navigate([''], { queryParams: { page: newPage } });
  }

  animate(name: string) {
    this[name] = !this[name];
  }

  updateUrl(evento) {
    evento.target.src = './assets/user1.svg';
  }
}
