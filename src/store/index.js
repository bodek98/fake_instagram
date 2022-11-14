import { createStore } from "vuex";

const store = createStore({
  state: {
    newPosts: [],
    newPost: {
      user: "",
      title: "",
    },
  },
  mutations: {
    UPDATE_INPUT_USER(state, inputUser) {
      state.newPost.user = inputUser;
    },
    UPDATE_INPUT_TITLE(state, inputTitle) {
      state.newPost.title = inputTitle;
    },
  },
});

export default store;
