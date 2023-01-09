import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {panel, panelSettings, tab} from "../../types";

export interface panelsState {
  panels: panel[]
}

const initialState: panelsState = {
  panels: []
}

export const panelsSlice = createSlice({
  name: 'panels',
  initialState,
  reducers: {
    createPanel: (state, panel: PayloadAction<panel>) => {
      state.panels = [...state.panels, panel.payload]
    },
    changePanelSettings: (state, data: PayloadAction<panelSettings>) => {
      let index = state.panels.findIndex(obj => obj.id === data.payload.panelId)
      state.panels[index] = {...state.panels[index], ...data.payload.settings}
    },
    deletePanel: (state, id: PayloadAction<number>) => {
      let index = state.panels.findIndex(obj => obj.id === id.payload)
      state.panels = [...state.panels.slice(index)]
    }
  }
})

export const { createPanel, changePanelSettings, deletePanel } = panelsSlice.actions

export default panelsSlice.reducer
