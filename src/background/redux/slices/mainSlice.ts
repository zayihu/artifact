import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {changePayload, createPayload, deletePayload, Items} from "../../types";

export interface mainState {
  items: Items
}

const initialState: mainState = {
  items: {
    panels: [],
    tabs: [],
    settings: {}
  }
}

export const mainSlice = createSlice({
  name: '',
  initialState,
  reducers: {
    createItem: (state, data: PayloadAction<createPayload>) => {
      let items = state.items[data.payload.type]
      items = [...items, data.payload.data]
    },
    changeItems: (state, data: PayloadAction<changePayload>) => {
      if (data.payload.type === 'settings') {
        state.items.settings = {...state.items.settings, ...data.payload.data}
        return
      }
      let items = state.items[data.payload.type]
      let index = items.findIndex(obj => obj.id === data.payload.data.id)
      items[index] = {...items[index], ...data.payload.data}
    },
    deleteItem: (state, data: PayloadAction<deletePayload>) => {
      let items = state.items[data.payload.type]
      let index = items.findIndex(obj => obj.id === data.payload.id)
      items = [...items.slice(index)]
    }

  }
})

export const { createItem, changeItems, deleteItem } = mainSlice.actions

export default mainSlice.reducer
