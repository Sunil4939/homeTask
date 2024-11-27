import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { persistReducer, persistStore } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RootReducers from "./reducers"


// Configure persistence settings
const persistConfig = {
    key: 'root', // Key for the root of the storage
    storage: AsyncStorage,
    timeout: 100000,
    whitelist: ['auth',]
    };

const persistedReducer = persistReducer(
    persistConfig,
    RootReducers,
);

export const store = configureStore({
    reducer: persistedReducer,  
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'],
      },
    }).concat(),
});

setupListeners(store.dispatch);


export const persistor = persistStore(store);