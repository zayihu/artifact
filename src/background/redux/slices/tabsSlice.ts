import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface tabsState {
    tabs: []
}

const initialState: tabsState = {
    tabs: []
};

export const tabsSlice = createSlice({
    name: 'tabs',
    initialState,
    reducers: {
        createTab: () => {},
        changeTab: () => {},
        deleteTab: () => {},
    },
});

export const { createTab, changeTab, deleteTab } = tabsSlice.actions;

export default tabsSlice.reducer;
