const { createSlice } = require("@reduxjs/toolkit");

const userPreferencesSlices = createSlice({
  name: "userPreferences",
  initialState: {
    theme: "light",
  },
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme == "light" ? "dark" : "light";
    },
  },
});

export const { toggleTheme } = userPreferencesSlices.actions;

export default userPreferencesSlices.reducer;
