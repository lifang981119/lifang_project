import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger'
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly';
import createRootReducer from './reducers';

import {createBrowserHistory} from 'history';

export const history = createBrowserHistory();

const getMiddleware = () => {
  if (process.env.NODE_ENV === 'production') {
    return applyMiddleware(thunk);
  } else {
    // Enable additional logging in non-production environments.
    return applyMiddleware(thunk, createLogger())
  }
};

export const store = createStore(createRootReducer(history), composeWithDevTools(getMiddleware()));
