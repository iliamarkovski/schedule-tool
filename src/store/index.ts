import { configureStore } from '@reduxjs/toolkit';
import { schedule } from './slices/schedule';
import { modal } from './slices/modal';

const store = configureStore({
  reducer: {
    schedule,
    modal,
  },
});

export { store };

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
