// //
// store/index.js

export const state = () => ({
  darkMode: false,
});

export const mutations = {
  toggleDarkMode(state) {
    console.log("Toggling!");
    state.darkMode = !state.darkMode;
  },
};
