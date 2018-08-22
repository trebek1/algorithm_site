import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Page1 from './Page1.react';
import Page2 from './Page2.react';
import rootReducer from './reducers';

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
          <Route path="/test1" component={Page1} />
          <Route path="/test2" component={Page2} />
          <Route path="/" component={App} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);

module.hot.accept();
