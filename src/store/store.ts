import { PayloadAction, configureStore, createSlice } from '@reduxjs/toolkit';

interface CounterState {
    progressBar: number;
  }
  
  const initialState: CounterState = {
    progressBar: 0,
  };

const counterSlice = createSlice({
  name: 'passwords',
  initialState,
  reducers: {
    editProgress: (state, action: PayloadAction<number>) => {
      state.progressBar += action.payload;
    }
  },
});


export const { editProgress } = counterSlice.actions;

const store = configureStore({
  reducer: {
    passwords: counterSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;