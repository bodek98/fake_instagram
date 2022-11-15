import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

const store = createStore({
  state: {
    newPosts: [],
  },
  mutations: {
    ADD_POST: (state, newPost) => {
      state.newPosts.unshift(newPost);
    },
    DELETE_POST: (state, newPost) => {
      const objWithIdIndex = state.newPosts.findIndex(
        (obj) => obj.id === newPost
      );
      state.newPosts.splice(objWithIdIndex, 1);
    },
  },
  plugins: [createPersistedState()],
});

export default store;
