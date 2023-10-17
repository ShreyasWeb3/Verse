import { createSlice } from "@reduxjs/toolkit";

const ShowsSlice = createSlice({
  name: "movies",
  initialState: {
    airingTodayShows: null,
    onTheAirShows: null,
    popularShows: null,
    topRatedShows: null,
    shows:false,
  },
  reducers: {
    addAiringTodayShows: (state, action) => {
      state.airingTodayShows = action.payload;
    },
    addOnTheAirShows: (state, action) => {
      state.onTheAirShows = action.payload;
    },
    addPopularShows: (state, action) => {
      state.popularShows = action.payload;
    },
    addTopRatedShows: (state, action) => {
      state.topRatedShows = action.payload;
    },
    toggleShows: (state) => {
      state.shows = !state.shows;
    },
  },
});

export const {
  addAiringTodayShows,
  addOnTheAirShows,
  addPopularShows,
  addTopRatedShows,
  toggleShows,
} = ShowsSlice.actions;

export default ShowsSlice.reducer;
