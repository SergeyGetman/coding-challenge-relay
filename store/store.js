import { configureStore } from '@reduxjs/toolkit'
import mainReducer from './slice'

export const store = configureStore({
    reducer: mainReducer
})

export default store