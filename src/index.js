import React from 'react';
import ReactDOM from 'react-dom';
import C1 from './Componente1';
import { Componente2 } from './Componente2';

ReactDOM.render(
  <React.StrictMode>
    <C1/>
    <Componente2/>
  </React.StrictMode>,
  document.getElementById('div1')
);