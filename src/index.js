import React from 'react';
import ReactDOM from 'react-dom'
import { WrapperApp } from './App'
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/index';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

const store = createStore(rootReducer, applyMiddleware(thunk));


ReactDOM.render(
    <Provider store={store}>
      <WrapperApp />
    </Provider>,
    document.getElementById('root')
);
