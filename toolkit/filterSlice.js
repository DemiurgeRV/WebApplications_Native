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
        // setDevice: (state, { payload }) => {
        //     console.log('setDevice');
        //     state.device = payload;
        // },
        // resetDevice: (state) => {
        //     console.log('resetDevice');
        //     state.device = {};
        // },
    },
});

export default  filterSlice.reducer;

export const { setFilters } = filterSlice.actions;