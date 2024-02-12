import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
    name: 'toolkit',
    initialState: {
        filters: [],
        filter: {},
    },
    reducers: {
        setFilters: (state, { payload }) => {
            console.log('setFilters');
            state.filters = payload;
        },
        setFilter: (state, { payload }) => {
            console.log('setFilter');
            state.filter = payload;
        },
        resetFilter: (state) => {
            console.log('resetFilter');
            state.filter = {};
        },
    },
});

export default  filterSlice.reducer;

export const { setFilters, setFilter, resetFilter } = filterSlice.actions;