import { createStore,applyMiddleware } from 'redux'
import { RootReducer } from './rootReducer';
import { persistStore,persistReducer } from 'redux-persist';
import logger from 'redux-logger';
import storage from 'redux-persist/lib/storage';

const persistConfig ={
    key:'main-root',
    storage
}

const persistedReducer = persistReducer(persistConfig,RootReducer)

const store = createStore(persistedReducer,applyMiddleware(logger))
const Persistor = persistStore(store)
export{Persistor};
export default store;