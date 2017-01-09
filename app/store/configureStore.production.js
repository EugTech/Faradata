// @flow
import thunk from 'redux-thunk';
import { hashHistory } from 'react-router';
import rootReducer from '../reducers';

const router = routerMiddleware(hashHistory);

const enhancer = applyMiddleware(thunk, router);

export default function configureStore(initialState: Object | void) {
  return createStore(rootReducer, initialState, enhancer);
}
