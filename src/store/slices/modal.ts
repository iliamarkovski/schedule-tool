import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type State = {
  activeModal: string;
};

const initialState: State = {
  activeModal: '',
};

const slice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal(state, action: PayloadAction<string>) {
      state.activeModal = action.payload;
    },
    closeModal(state) {
      state.activeModal = '';
    },
  },
});

const modal = slice.reducer;

export const { openModal, closeModal } = slice.actions;

export { modal };
