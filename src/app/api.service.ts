import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as senhas from './global';
import { ElectronService } from 'ngx-electron';

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
export class ApiService {
  public info: any;
  public chamou: boolean;
  public countSenhas: number;
  public retorno: IpcCom = new IpcCom();
  public endpoint: string;
  public protocol: string;

  constructor(private http: HttpClient, private _electron: ElectronService) {
    this.countSenhas = 0;
    console.log('rodando electron?', this._electron.isElectronApp);
    if(this._electron.isElectronApp) {
      this.retorno = this._electron.ipcRenderer.sendSync('com', { 'evt': 'startup' });
      this.endpoint = this.retorno.endpoint;
      this.protocol = this.retorno.ssl ? 'https' : 'http';
      console.log('retorno electron', this.retorno);
    } else {
      this.endpoint = 'localhost';
      this.protocol = 'http';
    }
  }

  public getPainel(): any {
    if (this.countSenhas === 0) {
      this.countSenhas = 1;
      this.info = null;
      const url = `${this.protocol}://${this.endpoint}:8080/call/init`;
      this.http.post(url, httpOptions).subscribe(
        (infos) => {
          this.info = infos;
          return this.info;
        },
        (error) => {
          this.countSenhas = 0;
          localStorage.setItem('chamou', null);
          // localStorage.setItem('info', JSON.stringify({stx_xts: true, interfaceEmissorPagina: senhas.tela237, tipo: 2 }));
          localStorage.removeItem('info');
        },
        () => {
          this.countSenhas = 0;
          localStorage.setItem('info', JSON.stringify(this.info));
          localStorage.setItem('chamou', 'true');
        }
      );
    } else {
      localStorage.setItem('chamou', 'false');
      return null;
    }
  }

  public getTela(): any {
    if (this.countSenhas === 0) {
      this.countSenhas = 1;
      const url = `${this.protocol}://${this.endpoint}:8080/call/init`;
      this.http.post(url, httpOptions).subscribe(
        (infos) => {
          this.info = infos;
          return this.info;
        },
        (error) => {
          console.log('error', error);
          this.countSenhas = 0;
        },
        () => {
          this.countSenhas = 0;
        }
      );
    }
  }
}
