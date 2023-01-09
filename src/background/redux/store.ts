import { configureStore } from '@reduxjs/toolkit';
import panelsReducer from './slices/panelsSlice'
import tabsReducer from './slices/tabsSlice'
import settingsReducer from './slices/settingsSlice'


export const store = configureStore({
    reducer: {
        panels: panelsReducer,
        tabs: tabsReducer,
        settings: settingsReducer
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
