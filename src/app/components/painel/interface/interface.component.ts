import { HttpClient } from '@angular/common/http';
import { NgxSpinnerService } from 'ngx-spinner';
import { InterfaceService } from './interface.service';
import { Component, OnInit, Input, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import * as tela from './../../../global';
import { Subscription, timer, interval } from 'rxjs';
import { Pagina, TituloPagina, Link, Botao } from 'src/app/models/interface.model';
import { ActivatedRoute, Router, RouterEvent, NavigationStart } from '@angular/router';
import { UserIdleService } from 'angular-user-idle';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-interface',
  templateUrl: './interface.component.html',
  styleUrls: ['./interface.component.css', './../print/print.component.css']
})
export class InterfaceComponent implements OnInit, OnChanges, OnDestroy {
  @Input() interface: any;
  private page: number;
  private ticks: string;
  public contentPagina: any[];
  private sub: Subscription;
  private subTimer: Subscription;
  private _subtela: Subscription;
  public regexNegrito = /([*])(.+)/g;

  public pagina: Pagina;
  public tituloPagina: TituloPagina[];
  public links: Link[];
  public botoes: Botao[];
  public qtdBotoes: number;
  public load = true;
  public error: boolean;
  public conected;

  private list = [];

  constructor(private _interface: InterfaceService, private _active: ActivatedRoute,
    private _route: Router, private _userIdle: UserIdleService, private spinner: NgxSpinnerService, private _api: ApiService,
    private _http: HttpClient) {
      _route.events.subscribe((event: RouterEvent) => {
        this.navigationInterceptor(event);
      });
  }

  ngOnInit() {
    this.subTimer = timer(0, 120 * 1000).subscribe((t: any) => {
      console.log('verificação de JSON iniciou');
      this.tickerFunc(t);
    });

    const source = interval(1 * 1000); // 10 - DEV / 1 - PROD
    this._subtela = source.subscribe(() => {
      this._api.getTela();
    });

    this.conected = JSON.parse(localStorage.getItem('chamou'));

    this.sub = this._active.params.subscribe(params => {
      // variavel que armazena o número da pagina vindo da url
      if (params['id'] === undefined) {
        this._interface.getInterfacePage(1);
      } else {
        this.page = +params['id'];
        this._interface.getInterfacePage(this.page);
      }

      // returna a estrutura da interface da pagina corrente
      setTimeout(() => {
        this.loadInterface(this._interface.interfacePagina);
      }, 150);
    });
  }
  ngOnChanges(changes: SimpleChanges) {
    if (this.interface) {
      console.log('INTERFACE', this.interface);
      const $body = document.querySelector('body');
      $body.classList.add('body-interface');
      // this.interface = tela.tela237; // somente para DEV - REMOVER DEPOIS!!!
      localStorage.setItem('interface', JSON.stringify(this.interface));
      this.conected = JSON.parse(localStorage.getItem('chamou'));
    }
  }
  ngOnDestroy() {
    if (this.sub !== undefined) { this.sub.unsubscribe(); }
    if (this.subTimer !== undefined) { this.subTimer.unsubscribe(); }
    if (this._subtela !== undefined) { this._subtela.unsubscribe(); }
    this._userIdle.stopWatching();
  }

  public tickerFunc(tick: any) {
    const d = new Date(0, 0, 0, 0, 0, tick, 0);
    this.ticks = d.toString();
    this.ticks = this.ticks.substring(16, 24);
    // this.spinner.show();
    this._interface.getInterfaceContent().subscribe(
      (t: any) => {
        console.log('INTERFACE EMISSOR', t.interfaceEmissorPagina);
        if (t.interfaceEmissorPagina === undefined || t.interfaceEmissorPagina === null) {
          this.load = false;
          this.error = false;
        } else {
          localStorage.removeItem('interface');
          localStorage.setItem('interface', JSON.stringify(t.interfaceEmissorPagina));
          this.pagina = new Pagina();
          this.error = false;
          this.loadInterface(this._interface.interfacePagina);
        }
      },(error) => {
        this.load = false;
        this.error = true;
      }, ()=> {
        // this.spinner.hide();
      });
  }

  public getPosicaoTexto(posicao: number): string {
    switch (posicao) {
      case 1:
        return 'right';
      case 2:
        return 'center';
      case 3:
        return 'left';
    }
  }

  public loadInterface(p: number) {
    this.pagina = JSON.parse(localStorage.getItem('interface'))
      .filter((item: Pagina) => item.id === p)[0];
    this.tituloPagina = this.pagina.interfaceEmissorTituloPagina;
    this.links = this.pagina.interfaceEmissorLink;
    this.botoes = this.pagina.interfaceEmissorBotao;

    console.log('PAGINA', this.pagina);

    this.contentPagina = JSON.parse(localStorage.getItem('interface')).map(
      (item: Pagina) => {
        return {
          pagina: item.id,
          totalBotao: item.interfaceEmissorBotao.length
      }
    });
  }

  public mostraLink(destino: number): string {
    let p = this.contentPagina.filter((item) => {
      return item.pagina === destino;
    });
    if(p[0].totalBotao === 0){
      return 'none';
    }
    return 'flex';
  }

  public navigate(origem: number, destino: number) {
    this._route.navigate(['/interface', destino]);
    this.list.push(origem, destino);
  }

  public previousPage() {
    this.list.pop();
    if (this.list.length === 0) {
      this._route.navigate(['/interface']);
    } else {
      this._route.navigate(['/interface', this.list[0]]);
    }
  }

  /*
    DIRECIONA PARA TELA DE IMPRESSÃO DE ACORDO COM IdBotao
    SETADO NO ELEMENTO HTML
  */
 public emitSenha(idBotao: number, tipo: number): void {
  if (tipo === 3) {
    console.log('Id botão destino : ', idBotao);
    this._route.navigate(['/print/botao', idBotao]);
  }
 }

 public navigationInterceptor(event: RouterEvent): void {
  if (event instanceof NavigationStart) {
    const page = event.url.substring(11);
    this.verifyIdleUser(page);
  }
 }

 /*
    VERIFICA SE USUARIO ESTÁ IDLE NA PAGINA
  */
 verifyIdleUser(id: string): void {
  this._userIdle.startWatching();
  if (id > '1') {
    this._userIdle.onTimerStart().subscribe(count => count == null ? console.log('não estou Idle') : console.log('contando ', count));
    this._userIdle.onTimeout().subscribe(() => {
      this._route.navigate(['/interface']);
    });
  }
  if (id === '1' || id === '') {
    console.log('aqui é a pagina inicial');
    this._userIdle.stopWatching();
    this._userIdle.stopTimer();
  }
 }

}
