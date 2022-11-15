import { createStore } from "vuex";

const store = createStore({
  state: {
    newPosts: [],
  },
  mutations: {
    ADD_POST: (state, newPost) => {
      state.newPosts.unshift(newPost);
    },
  },
});

export default store;
