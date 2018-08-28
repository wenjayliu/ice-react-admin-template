import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import stores from '@src/stores'
import router from './routes';
import 'normalize.css/normalize.css'// A modern alternative to CSS resets
import '@src/styles/index.scss'

// console.log('路由表', stores)

// const stores = {}

ReactDOM.render(
  <Provider {...stores}>
    {router}
  </Provider>, document.getElementById('root'));
