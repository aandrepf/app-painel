import { ApiService } from './../../../api.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InterfaceService } from '../interface/interface.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { UserIdleService } from 'angular-user-idle';
import * as tela from './../../../global';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

class Send {
  btnId: number;
  categoriaId: number;
  message: string;
  imprimirTicket: boolean;
  tipo: string;
}

@Component({
  selector: 'app-print',
  templateUrl: './print.component.html',
  styleUrls: ['./print.component.css']
})
export class PrintComponent implements OnInit, OnDestroy {
  private sub: Subscription;
  private urlServer: string;

  public waiting = true;
  public senha = false;
  public error = false;

  public valorSenha: string;

  constructor(private _active: ActivatedRoute,
    private _router: Router,
    private _interfaceService: InterfaceService,
    private _api: ApiService,
    private _userIdle: UserIdleService,
    private _http: HttpClient) {}
    private ticket: any;

  ngOnInit() {
    this.sub = this._active.params.subscribe(params => {
      console.log('parametros impressão', params['id']);
      setTimeout(() => {
        this.sendMsg(params['id']);
      }, 100);
    });

    this._userIdle.stopWatching();
    this._userIdle.stopTimer();
  }

  ngOnDestroy() {
    if (this.sub !== undefined) { this.sub.unsubscribe(); }
  }

  public sendMsg(idBotao: number) {
    let send = new Send();
    send.categoriaId = idBotao;
    send.btnId = idBotao;
    send.imprimirTicket = false;
    send.tipo = '|_NOVA_SENHA_|';
    this._interfaceService.sendMsg(send).subscribe(
      (dadoEnviado: any) => {
        console.log('Dado Enviado', dadoEnviado);
        if(dadoEnviado) {
          const url = `${this._api.protocol}://${this._api.endpoint}:8080/call/init`;
          this._http.post(url, httpOptions).subscribe(
            (retorno: any) => {
              this.valorSenha = retorno.ticket;
              console.log('senha', this.valorSenha);
              if(this.valorSenha === undefined || this.valorSenha === null) {
                this.error = true;
                this.waiting = false;
                setTimeout(() => { this._router.navigate(['/interface']); }, 3000);
              } else {
                this.senha = true;
                this.waiting = false;
                setTimeout(() => { this._router.navigate(['/interface']); }, 3000);
              }
            },
            error => {
              this.error = true;
              this.waiting = false;
              setTimeout(() => { this._router.navigate(['/interface']); }, 3000);
            }
          );
        }
      });
  }
}
