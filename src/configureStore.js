import {createStore,compose,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {verifyAuth} from './store/actions/index';
import rootReducer from "./store/reducers/index";


export default function configureStore(persistedState) {


    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(rootReducer,persistedState,composeEnhancers(
        applyMiddleware(thunk)
      ));
    store.dispatch(verifyAuth());
  return store;

}

