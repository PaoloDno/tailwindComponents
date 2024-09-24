import {createSlice} from '@reduxjs/toolkit'


const themes = ['base','sunset', 'ocean', 'forest', 'night', 'retro'];



const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    currentTheme: 'base',
  },
  reducers: {
    nextTheme: (state) => {
      const currentIndex = themes.indexOf(state.currentTheme);
      state.currentTheme = themes[(currentIndex + 1) % themes.length];
    },
    setTheme: (state, action) => {
      if (themes.includes(action.payload)) {
        state.currentTheme = action.payload;
      }
    },
  },
});

export const { nextTheme, setTheme } = themeSlice.actions;
export default themeSlice.reducer;