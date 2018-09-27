import { createStore, applyMiddleware, combineReducers} from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import locationReducer from './ducks/locationReducer';
import propertyReducer from './ducks/propertyReducer';


// Combine reducers into one
const combinedReducers = combineReducers({
    
    properties: propertyReducer,
    location: locationReducer
  });


// const middlewares = composeEnhancers(applyMiddleware(promiseMiddleware()));
const store = createStore(combinedReducers, applyMiddleware(promiseMiddleware()));

export default store;