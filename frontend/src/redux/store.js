import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice'
import moviesReducer from './moviesSlice'

export const store = configureStore({
  reducer: {
     app:userReducer,
     movie:moviesReducer
  },
})