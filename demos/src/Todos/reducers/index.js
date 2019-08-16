import { combineReducers, compose, createStore } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const RootReducer =  combineReducers({
  todos,
  visibilityFilter
});

const store = createStore(RootReducer, composeEnhancers());



export default store;