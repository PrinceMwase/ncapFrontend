import { createStore, combineReducers } from 'redux';

import authenticationReducer from '../reducers/login';

const rootReducer = combineReducers(

{ user: authenticationReducer }

);

const configureStore = () => {

return createStore(rootReducer);

}

export default configureStore;