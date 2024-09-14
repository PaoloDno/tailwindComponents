import { createSlice } from '@reduxjs/toolkit';

const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState: {
    isOpen: false,
    sections: [],
  },
  reducers: {
    toggleSidebar: (state) => {
      state.isOpen = !state.isOpen;
    },
    openSidebar: (state) => {
      state.isOpen = true;
    },
    closeSidebar: (state) => {
      state.isOpen = false;
    },
    updateSections: (state, action) => {
      state.sections = action.payload;
    },
  },
});

export const { toggleSidebar, openSidebar, closeSidebar, updateSections } = sidebarSlice.actions;
export default sidebarSlice.reducer;
