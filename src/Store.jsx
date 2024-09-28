import { configureStore } from '@reduxjs/toolkit'
import CounterSlice from './redux/Slices/CounterSlice'

export const store = configureStore({
  reducer: {
    counter: CounterSlice
  },
})