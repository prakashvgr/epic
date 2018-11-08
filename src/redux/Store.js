import { rootReducer } from './Reducers';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose }  from 'redux';

export let Store;

export const initialiseStore = () => {

    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    Store = createStore(
        rootReducer,
        initialState,
        composeEnhancers(
            applyMiddleware(thunk)
        )
    );
}

let initialState = {
    searchDestination: null
};