import { ApiService } from './../../../api.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as tela from './../../../global';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

class IpcCom {
  endpoint: string;
  ssl: boolean;
  debug: string;
}

@Injectable()
export class InterfaceService {
  public interfacePagina: number;
  public idVolta = [];
  public retorno: IpcCom = new IpcCom();
  public endpoint: string;
  public protocol: string;

  constructor(private _http: HttpClient, private _api: ApiService) {
    this.retorno = this._api.retorno;
    this.endpoint = this._api.endpoint;
    this.protocol = this._api.protocol;
  }

  getInterfacePage(page: number) {
    this.interfacePagina = page;
    console.log('PAGINA', this.interfacePagina);
  }

  getInterfaceContent() {
    const url = `${this.protocol}://${this.endpoint}:8080/call/getInterface`;
    return this._http.post(url, httpOptions);
  }

  sendMsg(json: any) {
    const url = `${this.protocol}://${this.endpoint}:8080/call/sendMsg`;
    const body = JSON.stringify(json);
    return this._http.post(url,body, httpOptions);
  }

  disableMouseSecondClick() {
    window.oncontextmenu = function(event) {
      event.preventDefault();
      event.stopPropagation();
      return false;
    };
  }
}
