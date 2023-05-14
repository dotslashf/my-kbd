import { configureStore, createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'color',
  initialState: {
    hex: '#e2e8f0'
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