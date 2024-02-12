import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
    name: 'toolkit',
    initialState: {
        filters: [],
        filter: {},
    },
    reducers: {
        setFilters: (state, { payload }) => {
            state.filters = payload;
        },
        setFilter: (state, { payload }) => {
            state.filter = payload;
        },
        resetFilter: (state) => {
            state.filter = {};
        },
    },
});

export default  filterSlice.reducer;

export const { setFilters, setFilter, resetFilter } = filterSlice.actions;