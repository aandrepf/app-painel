'use strict';

export const DADOS_SENHAS = null;
export const URL_API = 'http://localhost:8080'; // 192.168.0.59
export const CALL_INIT = 'call/init';
export const CALL_REINIT = 'call/reinit';

export const PAINEL = {
  'ultAlias2': '01',
  'ultAlias1': '01',
  'ultTipo1': 'MESA',
  'ultAlias0': '01',
  'ultTipo2': 'MESA',
  'tipoGuiche': 'MESA',
  'numGuiche': '01',
  'senhaChamada': 'G0004',
  'isFilaUnica': true,
  'senha2': 'B0500',
  'senha1': 'B0501',
  'ultTipo0': 'GERENCIA',
  'senha0': 'B0502',
  'usaLocucao': 'N',
  'codcli': '33'
};

export const VAREJO = {
  'dadosSenha': {
    'senha': 'G0004',
    'caixa': '03',
    'tipoCaixa': 'GERENCIA'
  },
  'ultimaSenhas': [
    {
      'senha': 'C1502',
      'caixa': '03',
      'tipoCaixa': 'CAIXA'
    }
  ],
  'tipoDisplay': 1,
  'usaLocucao': 'N',
  'codcli': '237'
};

export const ITAU = {
  'dadosSenha': {
    'senha': 'C1503',
    'caixa': '01',
    'tipoCaixa': 'GERENCIA'
  },
  'ultimaSenhas': [
    {
      'senha': 'C1502',
      'caixa': '03',
      'tipoCaixa': 'CAIXA'
    },
    {
      'senha': 'C1501',
      'caixa': '02',
      'tipoCaixa': 'MESA'
    },
    {
      'senha': 'B1002',
      'caixa': '04',
      'tipoCaixa': 'CAIXA'
    },
  ],
  'tipoDisplay': 1,
  'usaLocucao': 'N',
  'codcli': '341'
};

export const GERENCIAL = {
  'senhas': [
    {
      'nomeGerente': 'José da Silva',
      'nomeUsuario': 'André Philippe Figueiredo',
      'senhaUsada': 1502,
      'idAtendimento': 1620,
      'nomeCategoria': 'Gerente Prime',
      'status': 1, // 1 - OK , 2 - ALERTA , 3 - CRITICO
      'isPrioritario': true
    }
  ],
  'qtdEspera': 8,
  'tme': 94.26,
  'tipoDisplay': 2,
  'usaLocucao': 'N',
  'codcli': '237'
};

export const GER2 = {
	"senhas": [
    {
      "isPrioritario": true,
      "nomeGerente": "GERENTE 1851",
      "nomeUsuario": "ANALEIA RODRIGUES GUIMARAES NASCIMENTO  ",
      "senhaUsada": "F0013",
      "idAtendimento": 2016,
      "nomeategoria": "GERENTE CLASSIC",
      "usaLocucao": "N",
      "tipoDisplay": "1",
      "cor": 1,
      "te": "00:15:00"
    },
    {
      "isPrioritario": true,
      "nomeGerente": "GERENTE 1851",
      "nomeUsuario": "ADALBERTO PEREIRA CHAVES",
      "senhaUsada": "F0013",
      "idAtendimento": 2016,
      "nomeategoria": "GERENTE CLASSIC",
      "usaLocucao": "N",
      "tipoDisplay": "1",
      "cor": 1,
      "te": "00:02:00"
    },
    {
      "isPrioritario": true,
      "nomeGerente": "GERENTE 1851",
      "nomeUsuario": "ANDRE PHILIPPE FIGUEIREDO",
      "senhaUsada": "F0013",
      "idAtendimento": 2016,
      "nomeategoria": "GERENTE CLASSIC",
      "usaLocucao": "N",
      "tipoDisplay": "1",
      "cor": 1,
      "te": "00:05:00"
    },
    {
      "isPrioritario": true,
      "nomeGerente": "GERENTE 1851",
      "nomeUsuario": "JOSEPH DOUGLAS LACERDA DA ROCHA DE SOUZA",
      "senhaUsada": "F0013",
      "idAtendimento": 2016,
      "nomeategoria": "GERENTE CLASSIC",
      "usaLocucao": "N",
      "tipoDisplay": "1",
      "cor": 3,
      "te": "01:25:00"
    }
  ],
	"usaLocucao": "N",
  "tme": "02:08:13",
  'tipoDisplay': 2,
  'codcli': '237'
}
