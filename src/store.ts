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
  isLegendShown: boolean;
}

const colorSlice = createSlice({
  name: 'color',
  initialState: {
    keyPrimary: '#E2E8F0',
    keySecondary: '#7AA4E3',
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

const configSlice = createSlice({
  name: 'config',
  initialState: {
    keyMap: {
      "keySecondary": [
        "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "[", "]",
        "A", "S", "D", "F", "G", "H", "J", "K", "L", ";", "'",
        "Z", "X", "C", "V", "B", "N", "M", ",", ".", "/",
      ],
    },
    currentGroup: "keySecondary",
    isEditing: false,
    isLegendShown: true,
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
    },
    toggleIsLegendShown: (state) => {
      state.isLegendShown = !state.isLegendShown
    }
  }
})

const { actions: colorSliceAction, reducer: colorSliceReducer } = colorSlice
const { actions: configSliceAction, reducer: configSliceReducer } = configSlice

const store = configureStore({
  reducer: {
    color: colorSliceReducer,
    config: configSliceReducer
  }
})

export const { changeColor } = colorSliceAction;
export const { editGroupKeys, changeCurrentGroup, toggleIsEditing, toggleIsLegendShown } = configSliceAction;
export type StateType = ReturnType<typeof store.getState>;

export default store;