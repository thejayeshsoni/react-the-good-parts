import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {},
  reducers: {
    cachedSearchResults: (state, action) => {
      state = Object.assign(state, action.payload);
    },
  },
});

export const { cachedSearchResults } = searchSlice.actions;
export default searchSlice.reducer;
