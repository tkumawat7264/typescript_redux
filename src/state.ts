import { createSlice } from '@reduxjs/toolkit'
export interface countType {
  count: number
}
export interface actionType {
  payload: number
}
const initialState = {
  count: 0,
}
const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state: countType = initialState) => {
      state.count += 1
    },
    decrement: (state: countType = initialState) => {
      state.count -= 1
    },
    incrementByValue: (state: countType, action: actionType) => {
      state.count += action.payload
    },
  },
})
export const { increment, decrement, incrementByValue } = counterSlice.actions
export default counterSlice.reducer
