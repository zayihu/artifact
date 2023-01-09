import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface tabsState {
    settings: {}
}

const initialState: tabsState = {
    settings: {}
};

export const settingsSlice = createSlice({
    name: 'settings',
    initialState,
    reducers: {
        changeSetting: () => {},
    },
});

export const { changeSetting } = settingsSlice.actions;

export default settingsSlice.reducer;
