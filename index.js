/* global window, document */
/* eslint no-render-return-value: 0, jsx-filename-extension: 0 */

// index.js

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import MicroBlog from './components/MicroBlog';
import counter from './reducers';
import { SAVE, LIST, DELETE } from './actions';

/* eslint-disable no-underscore-dangle */
const store = createStore(reduxr,
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__());
/* eslint-enable */

const render = () => ReactDOM.render(
  <Provider store={store}>
    <MicroBlogApp />
  </Provider>,
  document.getElementById('root')
);

render();
store.subscribe(render);
