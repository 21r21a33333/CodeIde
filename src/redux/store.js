import { configureStore } from '@reduxjs/toolkit'
import ideReducer from './ide'

export const store = configureStore({
  reducer: {
    ide: ideReducer,
  },
})