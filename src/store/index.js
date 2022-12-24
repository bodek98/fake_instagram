import { createStore } from "vuex";
import { ref } from "vue";
import axios from "axios";
// import createPersistedState from "vuex-persistedstate";

let page = ref(1);
const store = createStore({
  state: {
    posts: [],
    isRemovePopupHidden: true,
    currentPostId: 0,
  },
  mutations: {
    GET_POSTS: (state, posts) => {
      state.posts = posts;
    },
    GET_SCROLLEDPOSTS: (state, posts) => {
      state.posts = [...state.posts, ...posts];
    },
    ADD_POST: (state, post) => {
      state.posts.unshift(post);
    },
    DELETE_POST: (state, post) => {
      const objWithIdIndex = state.posts.findIndex((obj) => obj.id === post);
      state.posts.splice(objWithIdIndex, 1);
    },
  },
  actions: {
    async fetchPosts({ commit }) {
      try {
        await axios
          .get(`http://localhost:3000/posts?_page=1&_limit=5`)
          .then((res) => {
            commit("GET_POSTS", res.data);
          });
      } catch (error) {
        console.error(error);
      }
    },
    async fetchScrolledPosts({ commit }) {
      try {
        await axios
          .get(`http://localhost:3000/posts?_page=${page.value}&_limit=5`)
          .then((res) => {
            page.value++;
            commit("GET_SCROLLEDPOSTS", res.data);
          });
      } catch (error) {
        console.error(error);
      }
    },
  },
  // plugins: [createPersistedState()],
});
export default store;
