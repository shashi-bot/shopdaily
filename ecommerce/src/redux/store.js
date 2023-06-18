import {configureStore,combineReducers} from "@reduxjs/toolkit";
import cartReducer from "./cartRedux";
import userReducer, { loadUser } from "./userRedux";
import productReducer from "./productRedux";
// import {
//     persistStore,
//     persistReducer,
//     FLUSH,
//     REHYDRATE,
//     PAUSE,
//     PERSIST,
//     PURGE,
//     REGISTER,
//   } from 'redux-persist'
  import storage from 'redux-persist/lib/storage'
//   const persistConfig = {
//     key: 'root',
//     version: 1,
//     storage,
//   }
//   const rootReducer =combineReducers({user:userReducer,cart:cartReducer});
//   const persistedReducer = persistReducer(persistConfig, rootReducer);


export const store = configureStore({
    reducer:{
        cart:cartReducer,
        auth:userReducer,
        products:productReducer,
    }
    // middleware: (getDefaultMiddleware) =>
    // getDefaultMiddleware({
    //   serializableCheck: {
    //     ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    //   },
    // }),
});
// export let persistor = persistStore(store);