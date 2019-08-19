import { Pipe } from '@angular/core';

@Pipe({
  name: 'truncar'
})
export class TruncarPipe {
  transform(value: string, args: string[]) {
    var separa = value.split(' ');

    var firstName = separa[0];
    var lastName = separa.length > 1 ? separa[separa.length - 1] : '';
    var nomeCompleto = firstName + ' ' + lastName;

    let limitador = args.length > 0 ? parseInt(args[0], 10) : 10;
    let trail = args.length > 1 ? args[1] : '...';

    // return firstName + ' ' + lastName.trim();

    console.log('VALOR', nomeCompleto, 'args', args, 'VALUE TAMANHO', nomeCompleto.length, 'LIMITADOR', limitador);

    return nomeCompleto.length > limitador ? nomeCompleto.trim().substring(0, limitador) + trail : nomeCompleto.trim();
  }
}
