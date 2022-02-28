import { configureStore } from '@reduxjs/toolkit'
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage';
import rootReducer from './reducers'

const persistConfig = {
    key: 'root',
    version: 1,
    storage: AsyncStorage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
})

let persistor = persistStore(store)
const state = { store, persistor }


export default state

// import { configureStore } from '@reduxjs/toolkit'
// import rootReducer from './reducers'
// import userReducer from './userSlice'

// // const store = configureStore({
// //     reducer: {
// //         user: userReducer,
// //   },
// // })

// const store = configureStore({
//     reducer: rootReducer,
// })

// export default store