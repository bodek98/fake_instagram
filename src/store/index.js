import { createStore } from "vuex";

export default createStore({
  state: {
    newPosts: [],
    newPost: {
      user: "",
      title: "",
    },
  },
  mutations: {
    updateInputUser(state, inputUser) {
      state.newPost.user = inputUser;
    },
    updateInputTitle(state, inputTitle) {
      state.newPost.title = inputTitle;
    },
  },
  actions: {},
  modules: {},
});
