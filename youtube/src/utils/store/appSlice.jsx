import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isMenuOpen: true,
    mostPopularVideos: [],
  },
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    closeMenu: (state) => {
      state.isMenuOpen = false;
    },
    addMostPopularVideos: (state, actions) => {
      state.mostPopularVideos = actions.payload;
    },
  },
});

export const { toggleMenu, closeMenu, addMostPopularVideos } = appSlice.actions;
export default appSlice.reducer;
