import { createStore } from "vuex";
import { ref } from "vue";
import createPersistedState from "vuex-persistedstate";
import axios from "axios";

let page = ref(1);
const store = createStore({
  state: {
    newPosts: [],
    posts: [],
    page: 1,
  },
  mutations: {
    GET_POSTS: (state, posts) => {
      state.posts = posts;
    },
    GET_SCROLLEDPOSTS: (state, posts) => {
      state.posts = [...state.posts, ...posts];
    },
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
  actions: {
    async fetchPosts({ commit }) {
      try {
        const data = await axios.get(
          `http://localhost:3000/posts?_page=1&_limit=5`
        );
        commit("GET_POSTS", data.data);
      } catch (error) {
        console.error(error);
      }
    },
    async fetchScrolledPosts({ commit }) {
      try {
        const data = await axios.get(
          `http://localhost:3000/posts?_page=${page.value}&_limit=5`
        );
        page.value++;
        commit("GET_SCROLLEDPOSTS", data.data);
      } catch (error) {
        console.error(error);
      }
    },
  },
  plugins: [createPersistedState()],
});
export default store;
