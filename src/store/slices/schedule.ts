import { formatDate } from './../../utils/formatDate';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { getDiffDays } from '../../utils/getDiffDays';
import { getNextDays } from '../../utils/nextDays';

type State = {
  rangeStart: string;
  rangeEnd: string;
  rangeDiff: number;
  times: string[][];
  hasReset: boolean;
};

const initialState: State = {
  rangeStart: '',
  rangeEnd: '',
  rangeDiff: 0,
  times: [],
  hasReset: false,
};

const slice = createSlice({
  name: 'schedule',
  initialState,
  reducers: {
    addRangeStart(state, action: PayloadAction<string>) {
      state.rangeStart = action.payload;

      if (!state.rangeStart) {
        state.rangeDiff = 0;
        state.times = [];
        return;
      }

      if (state.rangeDiff > 0) {
        const newRangeEnd = getNextDays(
          new Date(state.rangeStart),
          state.rangeDiff - 1
        );

        state.rangeEnd = formatDate(newRangeEnd, 'yyyy-mm-dd');
        return;
      }

      const diff = getDiffDays(state.rangeStart, state.rangeEnd) + 1;
      state.rangeDiff = diff;

      for (let i = 0; i < diff; i++) {
        state.times.push([]);
      }
    },
    addRangeEnd(state, action: PayloadAction<string>) {
      state.rangeEnd = action.payload;

      if (!state.rangeEnd) {
        state.rangeDiff = 0;
        state.times = [];
        return;
      }

      if (state.rangeStart) {
        const diff = getDiffDays(state.rangeStart, state.rangeEnd) + 1;
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

        state.rangeDiff = diff;
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

      if (!state.hasReset) {
        state.hasReset = true;
      }
    },
    addTimeSlot(state, action: PayloadAction<number>) {
      state.times[action.payload].push('');

      if (!state.hasReset) {
        state.hasReset = true;
      }
    },
    resetTimes(state) {
      for (let i = 0; i < state.rangeDiff; i++) {
        state.times[i] = [];
      }

      state.hasReset = false;
    },
  },
});

const schedule = slice.reducer;

export const { addRangeStart, addRangeEnd, addTime, addTimeSlot, resetTimes } =
  slice.actions;

export { schedule };
