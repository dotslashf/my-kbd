import { configureStore, createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'color',
  initialState: {
    hex: '#fff'
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