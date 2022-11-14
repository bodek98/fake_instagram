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
    CREATE_POST(state) {
      state.newPosts.push(state.newPost);
    },
  },
  actions: {
    UPDATE_INPUT_TITLE({ commit }, value) {
      commit("UPDATE_INPUT_TITLE", value);
      console.log(value);
    },
    UPDATE_INPUT_USER({ commit }, value) {
      commit("UPDATE_INPUT_USER", value);
      console.log(value);
    },
    CREATE_POST({ commit }) {
      commit("CREATE_POST");
    },
  },
});

export default store;
