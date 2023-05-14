import { configureStore, createSlice } from '@reduxjs/toolkit'

export type ColorInitialState =
  "keyPrimary" |
  "keySecondary" |
  "text" |
  "background"

interface ConfigState {
  keyMap: {
    [groupName: string]: string[];
  };
  currentGroup: string;
  isEditing: boolean;
}

const colorSlice = createSlice({
  name: 'color',
  initialState: {
    keyPrimary: '#E2E8F0',
    keySecondary: '#EDF2F7',
    text: '#1A202C',
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

const keyMapSlice = createSlice({
  name: 'keyMap',
  initialState: {
    keyMap: {
      "primary": [
        "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "[", "]",
        // "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'",
        // "z", "x", "c", "v", "b", "n", "m", ",", ".", "/",
      ],
    },
    currentGroup: "primary",
    isEditing: false,
  } as ConfigState,
  reducers: {
    editGroupKeys: (state, action: {
      payload: {
        key: string
      }
    }) => {
      if (state.keyMap[state.currentGroup].findIndex(key => key === action.payload.key) === -1) {
        state.keyMap[state.currentGroup].push(action.payload.key)
      } else {
        state.keyMap[state.currentGroup] = state.keyMap[state.currentGroup].filter(key => key !== action.payload.key)
      }
    },
    changeCurrentGroup: (state, action: {
      payload: {
        groupName: string
      }
    }) => {
      state.currentGroup = action.payload.groupName
    },
    toggleIsEditing: (state) => {
      state.isEditing = !state.isEditing
    }
  }
})

const { actions: colorSliceAction, reducer: colorSliceReducer } = colorSlice
const { actions: keyMapSliceAction, reducer: keyMapSliceReducer } = keyMapSlice

const store = configureStore({
  reducer: {
    color: colorSliceReducer,
    keyMap: keyMapSliceReducer
  }
})

export const { changeColor } = colorSliceAction;
export const { editGroupKeys, changeCurrentGroup, toggleIsEditing } = keyMapSliceAction;
export type StateType = ReturnType<typeof store.getState>;

export default store;