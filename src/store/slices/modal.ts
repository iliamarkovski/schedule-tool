import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type State = {
  modal: {
    isOpen: boolean;
    title: string;
    buttonTitle: string;
  };
};

const initialState: State = {
  modal: {
    isOpen: false,
    title: '',
    buttonTitle: '',
  },
};

const slice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    updateModal(state, action: PayloadAction<State['modal']>) {
      state.modal = action.payload;
    },
  },
});

const modal = slice.reducer;

export const { updateModal } = slice.actions;

export { modal };
