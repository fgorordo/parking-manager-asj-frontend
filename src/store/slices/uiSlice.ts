import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface IUiState {
  isMenuOpen: boolean;
  isModalOpen: boolean;
}

const initialState: IUiState = {
  isMenuOpen: false,
  isModalOpen: false,
}

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    handleToggleMenu: (state) => {
        state.isMenuOpen = !state.isMenuOpen;
    },
    useOpenModal: (state) => {
      state.isModalOpen = true;
    },
    useCloseModal: (state) => {
      state.isModalOpen = false;
    }
  },
})

// Action creators are generated for each case reducer function
export const { handleToggleMenu, useOpenModal, useCloseModal } = uiSlice.actions