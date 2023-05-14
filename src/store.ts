import { configureStore, createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'color',
  initialState: {
    hex: 'rgb(226 232 240 / var(--tw-bg-opacity))'
  },
  reducers: {
    changeColor: (state, action) => {
      state.hex = action.payload
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
export default store;