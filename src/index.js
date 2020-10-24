import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App/App';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from './reducers/index';
import * as serviceWorker from './serviceWorker';

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
 );

ReactDOM.render(
  <Provider store={store}>
    {/* <React.StrictMode> */}
        <App />
    {/* </React.StrictMode> */}
  </Provider>  ,
  document.getElementById('root')
);

serviceWorker.unregister();
