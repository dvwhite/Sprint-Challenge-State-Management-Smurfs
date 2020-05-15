import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

// Components imports
import App from "./components/App";

// Redux imports
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// Reducers
import { smurfReducer } from './reducers/smurfReducer';

// The redux store
const store = createStore(smurfReducer, applyMiddleware(thunk));


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root')
);
