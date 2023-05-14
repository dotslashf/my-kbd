import { Slice, configureStore, createSlice } from '@reduxjs/toolkit'


const counterSlice = createSlice({
  name: 'color',
  initialState: {
    key: '#e2e8f0',
    text: '#1a202c',
    background: '#1F2937',
  },
  reducers: {
    changeColor: (state, action: {
      payload: {
        partToChange: string,
        color: string
      }
    }) => {
      state[action.payload.partToChange as keyof typeof state] = action.payload.color
    }
  }
})

const { actions, reducer } = counterSlice

const store = configureStore({
  reducer: {
    color: reducer
  }
})

export const { changeColor } = actions;
export type ColorState = ReturnType<typeof store.getState>;

export default store;