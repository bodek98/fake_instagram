import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

const store = createStore({
  state: {
    newPosts: [],
  },
  mutations: {
    ADD_POST: (state, newPost) => {
      state.newPosts.unshift(newPost);
      newPost.id++;
    },
    DELETE_POST: (state) => {
      state.newPosts.splice(0, 1);
    },
  },
  plugins: [createPersistedState()],
});

export default store;
