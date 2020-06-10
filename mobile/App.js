import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

import React from 'react';

import Routes from './src/routes';

export default function App() {
  return (
 /* No react native, tem-se a tag view e a tag text 

  A view é usada no lugar das divs, footer, headers, etc
a text serve pra qualquer tipo de texto (h1,p,etc)   
 */
/* Veja que a estilização aqui é sempre assim. Voce coloca style e manda o objeto com as estilizações */
/* Logo, pra que o text fique branco, eu preciso de ir na tag dele ecolcoar style={...} */
/* Aois aqui nao existe herança */
/* Veja que aqui o escrito é emendado e com letra maiuscula  */
/* Todos os elemtnso já possuem displau:flex por padrao */
/*flex: 1, Faz ocupar a tela toda */
    <Routes />
  );
}