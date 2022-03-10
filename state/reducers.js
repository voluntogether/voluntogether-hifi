import { combineReducers } from '@reduxjs/toolkit';
import journalingSlice from './journalingSlice';
import userSlice from './userSlice';


const rootReducer = combineReducers({
    user: userSlice,
    journaling: journalingSlice
})


export default rootReducer