import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import configureStore from "./configureStore";
// import {createStore,compose,combineReducers,applyMiddleware} from 'redux';
import { BrowserRouter} from 'react-router-dom';
// import reducer from './store/reducers/reducer';
// import auth from "./store/reducers/index";
// import thunk from 'redux-thunk';

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const rootReducer = combineReducers({
//     addTodo:reducer,
//     auth:auth
// });
// const store = createStore(rootReducer,composeEnhancers(
//   applyMiddleware(thunk)
// ));

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
        <App />
    </BrowserRouter>
  </Provider>
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
