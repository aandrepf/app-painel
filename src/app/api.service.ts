import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as senhas from './global';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable()
export class ApiService {
  public info: any;
  public chamou: boolean;
  public countSenhas: number;

  constructor(private http: HttpClient) {
    this.countSenhas = 0;
  }

  public getPainel(): any {
    if (this.countSenhas === 0) {
      this.countSenhas = 1;
      this.info = null;
      const url = `${senhas.URL_API}/${senhas.CALL_INIT}`;
      this.http.post(url, httpOptions).subscribe(
        (infos) => {
          this.info = infos;
          return this.info;
        },
        (error) => {
          this.countSenhas = 0;
          localStorage.setItem('chamou', null);
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
}
