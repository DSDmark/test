// redux
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { persistStore, persistReducer, FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE } from 'redux-persist'

// utils
import { createPersistStorage } from '@/utils'

// constants
import { PERSIST_WHITELIST } from '@/constants'

// env
import { dev } from '@/constants'

// reducers
import ToastReducer from './toast'
import ThemeModeReducer from './themeMode'

// persistent store
const persistConfig = {
  key: 'root',
  storage: createPersistStorage(),
  whitelist: PERSIST_WHITELIST,
}

const rootReducer = combineReducers({
  toast: ToastReducer,
  themeMode: ThemeModeReducer,
})

export const makeStore = () => {
  const persistedReducer = persistReducer(persistConfig, rootReducer)
  const store = configureStore({
    devTools: dev,
    reducer: persistedReducer,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
          warnAfter: 1000,
        },
        immutableCheck: { warnAfter: 1000 },
      }).concat(),
  })
  const persistor = persistStore(store)
  return { store, persistor }
}

setupListeners(makeStore)

const { store, persistor: persistorStore } = makeStore()
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const persistor = persistorStore

// actions
export { setThemeMode } from './themeMode'
export { setErrorToast, setInfo, setSuccessToast, setWarningToast, reSetToast } from './toast'

// store
export default store
