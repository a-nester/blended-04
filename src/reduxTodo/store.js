import { configureStore } from '@reduxjs/toolkit';
import { todosReducer } from './todoSlice';
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import persistStore from 'redux-persist/es/persistStore';
import { filterReducer } from './filterSlice';

const persistTodoConfig = {
  key: 'todos',
  storage,
};

const persistedReducer = persistReducer(persistTodoConfig, todosReducer);

export const store = configureStore({
  reducer: {
    todos: persistedReducer,
    filter: filterReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
