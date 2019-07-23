import React from 'react';
import { render } from 'react-dom';
import MyCom from './MyCom';
import store from './store';
import { Provider } from 'react-redux';

render(
  <Provider store={store}>
    <MyCom />
  </Provider>,
  document.getElementById('root')
)