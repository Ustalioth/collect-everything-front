import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { cartReducer } from "./cartSlice";
import { shopReducer } from "./shopSlice";
import { userReducer } from "./userSlice";
import { authReducer } from "./authSlice";
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';


const persistConfig = {
  key: 'root',
  storage,
}

const rootReducer = combineReducers({
  shop: shopReducer,
  cart: cartReducer, 
  user: userReducer,
  token: authReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
})

export const persistor = persistStore(store);
