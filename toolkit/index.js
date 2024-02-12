import { combineReducers, configureStore } from '@reduxjs/toolkit';
import filterSlice from './filterSlice';

const rootReducer =  combineReducers({
    toolkit: filterSlice
})

export const store = configureStore({ 
    reducer:  rootReducer
});