import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface panelsState {
    panels: []
}

const initialState: panelsState = {
    panels: []
}

export const panelsSlice = createSlice({
    name: 'panels',
    initialState,
    reducers: {
        createPanel: () => {},
        changePanel: () => {},
        deletePanel: () => {},
    }
})

export const { createPanel, changePanel, deletePanel } = panelsSlice.actions;

export default panelsSlice.reducer;
