import { formatDate } from './../../utils/formatDate';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { getDiffDays } from '../../utils/getDiffDays';
import { getNextDays } from '../../utils/nextDays';

type State = {
  startDate: string;
  endDate: string;
  datesDiff: number;
  times: string[][];
  autocompleteUsed: boolean;
};

const initialState: State = {
  startDate: '',
  endDate: '',
  datesDiff: 0,
  times: [],
  autocompleteUsed: false,
};

const slice = createSlice({
  name: 'schedule',
  initialState,
  reducers: {
    addStartDate(state, action: PayloadAction<string>) {
      state.startDate = action.payload;

      if (!state.startDate) {
        state.datesDiff = 0;
        state.times = [];
        return;
      }

      if (state.datesDiff > 0) {
        const newRangeEnd = getNextDays(
          new Date(state.startDate),
          state.datesDiff - 1
        );

        state.endDate = formatDate(newRangeEnd, 'yyyy-mm-dd');
        return;
      }

      const diff = getDiffDays(state.startDate, state.endDate) + 1;
      state.datesDiff = diff;

      for (let i = 0; i < diff; i++) {
        state.times.push([]);
      }
    },
    addEndDate(state, action: PayloadAction<string>) {
      state.endDate = action.payload;

      if (!state.endDate) {
        state.datesDiff = 0;
        state.times = [];
        return;
      }

      if (state.startDate) {
        const diff = getDiffDays(state.startDate, state.endDate) + 1;
        const timesLength = state.times.length;

        if (diff > timesLength) {
          for (let i = 0; i < diff - timesLength; i++) {
            state.times.push([]);
          }
        } else {
          for (let i = 0; i < timesLength - diff; i++) {
            state.times.pop();
          }
        }

        state.datesDiff = diff;
      }
    },
    addTime(
      state,
      action: PayloadAction<{
        colIndex: number;
        timeIndex: number;
        value: string;
      }>
    ) {
      state.times[action.payload.colIndex][action.payload.timeIndex] =
        action.payload.value;
    },
    addTimeSlot(state, action: PayloadAction<number>) {
      state.times[action.payload].push('');
    },
    removeTime(
      state,
      action: PayloadAction<{
        colIndex: number;
        timeIndex: number;
      }>
    ) {
      state.times[action.payload.colIndex].splice(action.payload.timeIndex, 1);
    },
    resetTimes(state) {
      for (let i = 0; i < state.datesDiff; i++) {
        state.times[i] = [];
      }
    },
    resetAll() {
      return initialState;
    },
  },
});

const schedule = slice.reducer;

export const {
  addStartDate,
  addEndDate,
  addTime,
  addTimeSlot,
  resetTimes,
  removeTime,
  resetAll,
} = slice.actions;

export { schedule };
