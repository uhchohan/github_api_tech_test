import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';

const middleware = [
  thunk
]

let initialState={}

const withDevTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, 
  initialState, 
  withDevTools(applyMiddleware(...middleware))
);

export default store;

