import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import App from './App'
import todoApp from './reducers/'

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(todoApp);
console.log(store.getState())
render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('app'));