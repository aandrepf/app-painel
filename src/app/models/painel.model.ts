export class Painel {
  isFilaUnica: boolean;
  numGuiche: string;
  senhaChamada: string;
  tipoGuiche: string;
  ultAlias0: string;
  ultAlias1: string;
  ultAlias2: string;
  ultSenha0: string;
  ultSenha1: string;
  ultSenha2: string;
  ultTipo0: string;
  ultTipo1: string;
  ultTipo2: string;
  usaLocucao: string;
  senha0: string;
  senha1: string;
  senha2: string;
  codcli: string;
}

export class Painelv2 {
  dadosSenha: DadoSenha;
  ultimaSenhas: DadoSenha[];
  senhas: DadoSenha[];
  tipoDisplay: number;
  usaLocucao: string;
  codcli: string;
  isFilaUnica: boolean;
  stx_xts: boolean;
  desligar: boolean;
  tme: string;
  data: string;
  hora:string;
}

export class DadoSenha {
  senha: string;
  caixa: string;
  tipoCaixa: string;
  nomeGerente: string;
  nomeUsuario: string;
  senhaUsada: number;
  idAtendimento: number;
  isPrioritario: boolean;
  cor: string;
  te: any;
  tipoDisplay: string;
  usaLocucao: string;
}
