'use strict';

export const DADOS_SENHAS = null;
export const URL_API = 'http://localhost:8080'; // 192.168.0.59
export const CALL_INIT = 'call/init';
export const CALL_REINIT = 'call/reinit';
export const SEND_MSG = 'call/sendMsg';
export const GET_INTERFACE = 'call/getInterface';

export const tela237 = [
  {
  "BtnVoltar": false,
  "Descr": "Página Principal",
  "IconePrioritario": false,
  "Id": 1,
  "InterfaceEmissorBotao": [{
    "DescLocalAtendimento": "GERÊNCIA",
    "HasImage": true,
    "IconePrioritario": true,
    "Id": 1,
    "IdBotao": 12,
    "IdEmissorPagina": 1,
    "IdLocalAtendimento": 2,
    "NomeImage": "btn_prime.png",
    "TamanhoBotao": 14,
    "TextoBotao": "Gerente prime",
    "TipoBotao": 3
  }, {
    "DescLocalAtendimento": "GERÊNCIA",
    "HasImage": true,
    "IconePrioritario": true,
    "Id": 2,
    "IdBotao": 11,
    "IdEmissorPagina": 1,
    "IdLocalAtendimento": 2,
    "NomeImage": "btn_exclusive.png",
    "TamanhoBotao": 14,
    "TextoBotao": "Gerente exclusive",
    "TipoBotao": 3
  }, {
    "DescLocalAtendimento": "GERÊNCIA",
    "HasImage": true,
    "IconePrioritario": true,
    "Id": 3,
    "IdBotao": 13,
    "IdEmissorPagina": 1,
    "IdLocalAtendimento": 2,
    "NomeImage": "btn_negocios.png",
    "TamanhoBotao": 14,
    "TextoBotao": "Gerente empresas e negócios ",
    "TipoBotao": 3
  }, {
    "DescLocalAtendimento": "GERÊNCIA",
    "HasImage": true,
    "IconePrioritario": true,
    "Id": 4,
    "IdBotao": 8,
    "IdEmissorPagina": 1,
    "IdLocalAtendimento": 2,
    "NomeImage": "btn_branco.png",
    "TamanhoBotao": 13,
    "TextoBotao": "*Seguros, Previdência, Automóvel e Residência, Saúde, Vida, Dental",
    "TipoBotao": 3
  }],
  "InterfaceEmissorLink": [{
    "Descr": "Link para páginas de gerência",
    "IconePrioritario": false,
    "Id": 1,
    "IdEmissorPagina": 1,
    "IdEmissorPaginasDestino": 4,
    "InterfaceEmissorTituloLink": [{
      "Id": 1,
      "IdEmissorPagina": 1,
      "IdLink": 1,
      "Negrito": false,
      "PosicaoTexto": 3,
      "TamanhoFonte": 19,
      "TextoLink": "Gerência de Atendimento"
    }, {
      "Id": 2,
      "IdEmissorPagina": 1,
      "IdLink": 1,
      "Negrito": false,
      "PosicaoTexto": 3,
      "TamanhoFonte": 14,
      "TextoLink": "Abertura de Contas"
    }, {
      "Id": 3,
      "IdEmissorPagina": 1,
      "IdLink": 1,
      "Negrito": false,
      "PosicaoTexto": 3,
      "TamanhoFonte": 14,
      "TextoLink": "Empréstimos"
    }, {
      "Id": 4,
      "IdEmissorPagina": 1,
      "IdLink": 1,
      "Negrito": false,
      "PosicaoTexto": 3,
      "TamanhoFonte": 14,
      "TextoLink": "Financiamentos "
    }, {
      "Id": 5,
      "IdEmissorPagina": 1,
      "IdLink": 1,
      "Negrito": false,
      "PosicaoTexto": 3,
      "TamanhoFonte": 14,
      "TextoLink": "Outros Serviços"
    }],
    "TamanhoBotaolink": 14,
    "TipoBotao": 2
  }, {
    "Descr": "Link para páginas de caixa",
    "IconePrioritario": false,
    "Id": 2,
    "IdEmissorPagina": 1,
    "IdEmissorPaginasDestino": 2,
    "InterfaceEmissorTituloLink": [{
      "Id": 6,
      "IdEmissorPagina": 1,
      "IdLink": 2,
      "Negrito": false,
      "PosicaoTexto": 3,
      "TamanhoFonte": 19,
      "TextoLink": "Caixa"
    }, {
      "Id": 7,
      "IdEmissorPagina": 1,
      "IdLink": 2,
      "Negrito": false,
      "PosicaoTexto": 3,
      "TamanhoFonte": 14,
      "TextoLink": "Pagamentos e recebimentos"
    }, {
      "Id": 8,
      "IdEmissorPagina": 1,
      "IdLink": 2,
      "Negrito": false,
      "PosicaoTexto": 3,
      "TamanhoFonte": 14,
      "TextoLink": "*Retirada de:"
    }, {
      "Id": 9,
      "IdEmissorPagina": 1,
      "IdLink": 2,
      "Negrito": false,
      "PosicaoTexto": 3,
      "TamanhoFonte": 14,
      "TextoLink": "Cartão de Débito"
    }, {
      "Id": 10,
      "IdEmissorPagina": 1,
      "IdLink": 2,
      "Negrito": false,
      "PosicaoTexto": 3,
      "TamanhoFonte": 14,
      "TextoLink": "Cheque Devolvido"
    }, {
      "Id": 11,
      "IdEmissorPagina": 1,
      "IdLink": 2,
      "Negrito": false,
      "PosicaoTexto": 3,
      "TamanhoFonte": 14,
      "TextoLink": "Talão de Cheques"
    }],
    "TamanhoBotaolink": 14,
    "TipoBotao": 2
  }],
  "InterfaceEmissorTituloPagina": [{
    "Id": 1,
    "IdEmissorPagina": 1,
    "Negrito": false,
    "PosicaoTexto": 2,
    "TamanhoFonte": 44,
    "TextoPagina": "Seja"
  }, {
    "Id": 2,
    "IdEmissorPagina": 1,
    "Negrito": false,
    "PosicaoTexto": 2,
    "TamanhoFonte": 44,
    "TextoPagina": "Bem Vindo!"
  }],
  "MsgExtra": "<p class='presentation'>Confira as opções de atendimento que o banco preparou para você:<\/p>\u000d\u000a<div class='op-left'>\u000d\u000a<p class='op-title'>Correntistas:<\/p>\u000d\u000a<p class='op-description'>Débito Automático | Autoatendimento | Internet Banking | Bradesco Celular | DDA Fone-Fácil | Bradesco Expresso<\/p>\u000d\u000a<\/div>\u000d\u000a<div class='op-right'>\u000d\u000a<p class='op-title'>Não Correntistas:<\/p>\u000d\u000a<p class='op-description'>Bradesco Expresso (Veja a relação na Agência) | Use o Autoatendimento para pagamento com cartões de outros Bancos<\/p>\u000d\u000a<\/div>"
}, {
  "BtnVoltar": true,
  "Descr": "Página Caixa",
  "IconePrioritario": false,
  "Id": 2,
  "InterfaceEmissorBotao": [{
    "DescLocalAtendimento": "CAIXA",
    "HasImage": false,
    "IconePrioritario": true,
    "Id": 5,
    "IdBotao": 1,
    "IdEmissorPagina": 2,
    "IdLocalAtendimento": 1,
    "NomeImage": "btn_branco.png",
    "TamanhoBotao": 14,
    "TextoBotao": "Pagamentos e Recebimentos ",
    "TipoBotao": 3
  }, {
    "DescLocalAtendimento": "CAIXA",
    "HasImage": true,
    "IconePrioritario": true,
    "Id": 6,
    "IdBotao": 3,
    "IdEmissorPagina": 2,
    "IdLocalAtendimento": 1,
    "NomeImage": "btn_prime.png",
    "TamanhoBotao": 14,
    "TextoBotao": "Caixa Prime ",
    "TipoBotao": 3
  }, {
    "DescLocalAtendimento": "CAIXA",
    "HasImage": true,
    "IconePrioritario": true,
    "Id": 7,
    "IdBotao": 4,
    "IdEmissorPagina": 2,
    "IdLocalAtendimento": 1,
    "NomeImage": "btn_exclusive.png",
    "TamanhoBotao": 14,
    "TextoBotao": "Caixa Exclusive ",
    "TipoBotao": 3
  }, {
    "DescLocalAtendimento": "CAIXA",
    "HasImage": false,
    "IconePrioritario": true,
    "Id": 8,
    "IdBotao": 9,
    "IdEmissorPagina": 2,
    "IdLocalAtendimento": 1,
    "NomeImage": "btn_branco.png",
    "TamanhoBotao": 14,
    "TextoBotao": "Retirada de Cartão de Débito Cheque Devolvido Talão de Cheque",
    "TipoBotao": 3
  }],
  "InterfaceEmissorLink": [{
    "Descr": "Link para páginas de caixa prioritário",
    "IconePrioritario": true,
    "Id": 3,
    "IdEmissorPagina": 2,
    "IdEmissorPaginasDestino": 3,
    "InterfaceEmissorTituloLink": [{
      "Id": 12,
      "IdEmissorPagina": 2,
      "IdLink": 3,
      "Negrito": false,
      "PosicaoTexto": 2,
      "TamanhoFonte": 14,
      "TextoLink": "Atendimentos Prioritários"
    }],
    "TamanhoBotaolink": 14,
    "TipoBotao": 2
  }],
  "InterfaceEmissorTituloPagina": [{
    "Id": 3,
    "IdEmissorPagina": 2,
    "Negrito": false,
    "PosicaoTexto": 2,
    "TamanhoFonte": 44,
    "TextoPagina": "Caixa"
  }],
  "MsgExtra": "<p class='presentation'>Confira as opções de atendimento que o banco preparou para você:<\/p>\u000d\u000a<div class='op-left'>\u000d\u000a<p class='op-title'>Correntistas:<\/p>\u000d\u000a<p class='op-description'>Débito Automático | Autoatendimento | Internet Banking | Bradesco Celular | DDA Fone-Fácil | Bradesco Expresso<\/p>\u000d\u000a<\/div>\u000d\u000a<div class='op-right'>\u000d\u000a<p class='op-title'>Não Correntistas:<\/p>\u000d\u000a<p class='op-description'>Bradesco Expresso (Veja a relação na Agência) | Use o Autoatendimento para pagamento com cartões de outros Bancos<\/p>\u000d\u000a<\/div>"
}, {
  "BtnVoltar": true,
  "Descr": "Página Caixa Prioritário",
  "IconePrioritario": true,
  "Id": 3,
  "InterfaceEmissorBotao": [{
    "DescLocalAtendimento": "CAIXA",
    "HasImage": true,
    "IconePrioritario": false,
    "Id": 9,
    "IdBotao": 2,
    "IdEmissorPagina": 3,
    "IdLocalAtendimento": 1,
    "NomeImage": "btn_branco.png",
    "TamanhoBotao": 12,
    "TextoBotao": "Caixa Prioritário Pagamentos e Recebimentos",
    "TipoBotao": 3
  }, {
    "DescLocalAtendimento": "CAIXA",
    "HasImage": false,
    "IconePrioritario": false,
    "Id": 10,
    "IdBotao": 14,
    "IdEmissorPagina": 3,
    "IdLocalAtendimento": 1,
    "NomeImage": "btn_branco.png",
    "TamanhoBotao": 14,
    "TextoBotao": "Clientes acima de 80 anos de idade",
    "TipoBotao": 3
  }, {
    "DescLocalAtendimento": "CAIXA",
    "HasImage": false,
    "IconePrioritario": false,
    "Id": 11,
    "IdBotao": 15,
    "IdEmissorPagina": 3,
    "IdLocalAtendimento": 1,
    "NomeImage": "btn_branco.png",
    "TamanhoBotao": 14,
    "TextoBotao": "*Retirada de, Cartão de Débito, Cheque Devolvido, Talão de Cheque",
    "TipoBotao": 3
  }],
  "InterfaceEmissorLink": [],
  "InterfaceEmissorTituloPagina": [{
    "Id": 4,
    "IdEmissorPagina": 3,
    "Negrito": false,
    "PosicaoTexto": 2,
    "TamanhoFonte": 44,
    "TextoPagina": "Caixa"
  }, {
    "Id": 5,
    "IdEmissorPagina": 3,
    "Negrito": false,
    "PosicaoTexto": 2,
    "TamanhoFonte": 44,
    "TextoPagina": "Prioritário"
  }],
  "MsgExtra": "<p class='presentation'>Confira as opções de atendimento que o banco preparou para você:<\/p>\u000d\u000a<div class='op-left'>\u000d\u000a<p class='op-title'>Correntistas:<\/p>\u000d\u000a<p class='op-description'>Débito Automático | Autoatendimento | Internet Banking | Bradesco Celular | DDA Fone-Fácil | Bradesco Expresso<\/p>\u000d\u000a<\/div>\u000d\u000a<div class='op-right'>\u000d\u000a<p class='op-title'>Não Correntistas:<\/p>\u000d\u000a<p class='op-description'>Bradesco Expresso (Veja a relação na Agência) | Use o Autoatendimento para pagamento com cartões de outros Bancos<\/p>\u000d\u000a<\/div>"
}, {
  "BtnVoltar": true,
  "Descr": "Página Gerência",
  "IconePrioritario": false,
  "Id": 4,
  "InterfaceEmissorBotao": [{
    "DescLocalAtendimento": "GERÊNCIA",
    "HasImage": false,
    "IconePrioritario": true,
    "Id": 12,
    "IdBotao": 18,
    "IdEmissorPagina": 4,
    "IdLocalAtendimento": 2,
    "NomeImage": "btn_branco.png",
    "TamanhoBotao": 14,
    "TextoBotao": "Abertura de contas Empréstimos Financiamentos",
    "TipoBotao": 3
  }, {
    "DescLocalAtendimento": "GERÊNCIA",
    "HasImage": false,
    "IconePrioritario": true,
    "Id": 13,
    "IdBotao": 10,
    "IdEmissorPagina": 4,
    "IdLocalAtendimento": 2,
    "NomeImage": "btn_branco.png",
    "TamanhoBotao": 14,
    "TextoBotao": "Outros serviços Pedido de cartão Prova de vida Solicitações diversas",
    "TipoBotao": 3
  }],
  "InterfaceEmissorLink": [{
    "Descr": "Link para páginas de gerência prioritário",
    "IconePrioritario": true,
    "Id": 4,
    "IdEmissorPagina": 4,
    "IdEmissorPaginasDestino": 5,
    "InterfaceEmissorTituloLink": [{
      "Id": 13,
      "IdEmissorPagina": 4,
      "IdLink": 4,
      "Negrito": false,
      "PosicaoTexto": 2,
      "TamanhoFonte": 14,
      "TextoLink": "Atendimentos Prioritários"
    }],
    "TamanhoBotaolink": 14,
    "TipoBotao": 2
  }],
  "InterfaceEmissorTituloPagina": [{
    "Id": 6,
    "IdEmissorPagina": 4,
    "Negrito": false,
    "PosicaoTexto": 2,
    "TamanhoFonte": 44,
    "TextoPagina": "Gerência de"
  }, {
    "Id": 7,
    "IdEmissorPagina": 4,
    "Negrito": false,
    "PosicaoTexto": 2,
    "TamanhoFonte": 44,
    "TextoPagina": "Atendimento"
  }],
  "MsgExtra": "<p class='presentation'>Confira as opções de atendimento que o banco preparou para você:<\/p>\u000d\u000a<div class='op-left'>\u000d\u000a<p class='op-title'>Correntistas:<\/p>\u000d\u000a<p class='op-description'>Débito Automático | Autoatendimento | Internet Banking | Bradesco Celular | DDA Fone-Fácil | Bradesco Expresso<\/p>\u000d\u000a<\/div>\u000d\u000a<div class='op-right'>\u000d\u000a<p class='op-title'>Não Correntistas:<\/p>\u000d\u000a<p class='op-description'>Bradesco Expresso (Veja a relação na Agência) | Use o Autoatendimento para pagamento com cartões de outros Bancos<\/p>\u000d\u000a<\/div>"
}, {
  "BtnVoltar": true,
  "Descr": "Página Gerência Prioritário",
  "IconePrioritario": true,
  "Id": 5,
  "InterfaceEmissorBotao": [{
    "DescLocalAtendimento": "GERÊNCIA",
    "HasImage": false,
    "IconePrioritario": true,
    "Id": 14,
    "IdBotao": 19,
    "IdEmissorPagina": 5,
    "IdLocalAtendimento": 2,
    "NomeImage": "btn_branco.png",
    "TamanhoBotao": 14,
    "TextoBotao": "Gerência Prioritário Abertura de contas Empréstimos Financiamentos",
    "TipoBotao": 3
  }, {
    "DescLocalAtendimento": "GERÊNCIA",
    "HasImage": false,
    "IconePrioritario": false,
    "Id": 15,
    "IdBotao": 16,
    "IdEmissorPagina": 5,
    "IdLocalAtendimento": 2,
    "NomeImage": "btn_branco.png",
    "TamanhoBotao": 14,
    "TextoBotao": "Clientes acima de 80 anos de idade",
    "TipoBotao": 3
  }, {
    "DescLocalAtendimento": "GERÊNCIA",
    "HasImage": false,
    "IconePrioritario": false,
    "Id": 16,
    "IdBotao": 17,
    "IdEmissorPagina": 5,
    "IdLocalAtendimento": 2,
    "NomeImage": "btn_branco.png",
    "TamanhoBotao": 14,
    "TextoBotao": "*Outros serviços, Pedido de cartão, Prova de vida, Solicitações diversas",
    "TipoBotao": 3
  }],
  "InterfaceEmissorLink": [],
  "InterfaceEmissorTituloPagina": [{
    "Id": 8,
    "IdEmissorPagina": 5,
    "Negrito": false,
    "PosicaoTexto": 2,
    "TamanhoFonte": 44,
    "TextoPagina": "Gerência"
  }, {
    "Id": 9,
    "IdEmissorPagina": 5,
    "Negrito": false,
    "PosicaoTexto": 2,
    "TamanhoFonte": 44,
    "TextoPagina": "Prioritário"
  }],
  "MsgExtra": "<p class='presentation'>Confira as opções de atendimento que o banco preparou para você:<\/p>\u000d\u000a<div class='op-left'>\u000d\u000a<p class='op-title'>Correntistas:<\/p>\u000d\u000a<p class='op-description'>Débito Automático | Autoatendimento | Internet Banking | Bradesco Celular | DDA Fone-Fácil | Bradesco Expresso<\/p>\u000d\u000a<\/div>\u000d\u000a<div class='op-right'>\u000d\u000a<p class='op-title'>Não Correntistas:<\/p>\u000d\u000a<p class='op-description'>Bradesco Expresso (Veja a relação na Agência) | Use o Autoatendimento para pagamento com cartões de outros Bancos<\/p>\u000d\u000a<\/div>"
}];

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
    },
    {
      'nomeGerente': 'José da Silva',
      'nomeUsuario': 'André Philippe Figueiredo',
      'senhaUsada': 1502,
      'idAtendimento': 1620,
      'nomeCategoria': 'Gerente Prime',
      'status': 1, // 1 - OK , 2 - ALERTA , 3 - CRITICO
      'isPrioritario': true
    },
    {
      'nomeGerente': 'José da Silva',
      'nomeUsuario': 'André Philippe Figueiredo',
      'senhaUsada': 1502,
      'idAtendimento': 1620,
      'nomeCategoria': 'Gerente Prime',
      'status': 1, // 1 - OK , 2 - ALERTA , 3 - CRITICO
      'isPrioritario': true
    },
    {
      'nomeGerente': 'José da Silva',
      'nomeUsuario': 'André Philippe Figueiredo',
      'senhaUsada': 1502,
      'idAtendimento': 1620,
      'nomeCategoria': 'Gerente Prime',
      'status': 1, // 1 - OK , 2 - ALERTA , 3 - CRITICO
      'isPrioritario': true
    },
    {
      'nomeGerente': 'José da Silva',
      'nomeUsuario': 'André Philippe Figueiredo',
      'senhaUsada': 1502,
      'idAtendimento': 1620,
      'nomeCategoria': 'Gerente Prime',
      'status': 1, // 1 - OK , 2 - ALERTA , 3 - CRITICO
      'isPrioritario': true
    },
    {
      'nomeGerente': 'José da Silva',
      'nomeUsuario': 'André Philippe Figueiredo',
      'senhaUsada': 1502,
      'idAtendimento': 1620,
      'nomeCategoria': 'Gerente Prime',
      'status': 1, // 1 - OK , 2 - ALERTA , 3 - CRITICO
      'isPrioritario': true
    },
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
      "nomeUsuario": "JOSEPH DOUGLAS LACERDA DA ROCHA DE SILVEIRAMEIADO",
      "senhaUsada": "F0013",
      "idAtendimento": 2016,
      "nomeategoria": "GERENTE CLASSIC",
      "usaLocucao": "N",
      "tipoDisplay": "1",
      "cor": 3,
      "te": "01:25:00"
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
  'codcli': '237',
  'data': '07/08/2019',
  'hora': '16:32:02'
}
