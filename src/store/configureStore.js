import {createStore} from 'redux';
import rootReducer from '../reducers/index';

const configureStore = (initialState) => {
    const store = createStore(
        rootReducer,
        initialState,
        window.devToolsExtension ? window.devToolsExtension() : undefined
    );
    return store
};
export default configureStore;

// 'use strict'
//
// import {createStore, applyMiddleware} from 'redux'
// import thunk from 'redux-thunk'
// import rootReducer from '../reducers/index.js'
//
//
// const middlewares = [thunk]
// const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore)
//
// export default function configureStore(initialState){
//     return createStoreWithMiddleware(rootReducer,initialState)
// }



// import {createStore, applyMiddleware} from 'redux'
// import thunk from 'redux-thunk'
// import rootReducer from '../reducers/index.js'
//
//
// const middlewares = [thunk]
// const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore)
//
// export default function configureStore(initialState){
//     return createStoreWithMiddleware(rootReducer,initialState)
// }

