import { createStore } from "vuex";

export default createStore({
  state: {
    newPosts: [],
    newPost: {
      user: "",
      title: "",
    },
  },
  getters: {},
  mutations: {
    updateInputTitle(state, inputTitle) {
      state.newPost.title = inputTitle;
    },
    updateInputUser(state, inputUser) {
      state.newPost.user = inputUser;
    },
    createPost(state) {
      state.newPosts.push(state.newPost);
      console.log(state.newPosts);
    },
  },
  actions: {
    createPost(state) {
      state.newPosts.push(state.newPost);
      console.log(state.newPosts);
    },
  },
  modules: {},
});
