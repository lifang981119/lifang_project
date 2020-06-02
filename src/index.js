import React from 'react'
import ReactDOM from 'react-dom'
import {store, history} from './redux/store';
import {Provider} from 'react-redux'
import {Route, Switch} from 'react-router';
import {ConnectedRouter} from 'connected-react-router'

import App from './App'


const rootElement = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/" component={App}/>
      </Switch>
    </ConnectedRouter>
  </Provider>,
  rootElement
);
