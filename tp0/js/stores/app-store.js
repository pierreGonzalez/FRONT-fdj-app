import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import reducer from '../reducers/reducer';

const store = createStore(
  reducer,
  compose(
    applyMiddleware(
      thunkMiddleware
  ),
  window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);
export default store;
