<template>
  <div class="popup">
    <button class="popup__close" @click="$emit('closePopup')">X</button>
    <div class="popup__container">
      <nav class="popup__navbar">
        <p class="popup__navbar-p">Add new post</p>
      </nav>
      <form class="popup__form" @submit.prevent="addPost">
        <div>
          <input
            v-model="user"
            class="popup__input"
            type="text"
            placeholder="Your nickname"
          />
          <input
            v-model="title"
            class="popup__input"
            type="text"
            placeholder="Title"
          />
          <input class="popup__input" type="file" />
        </div>
        <button
          class="popup__create-post"
          @click="$store.dispatch('CREATE_POST')"
        >
          Create post
        </button>
      </form>
      {{ $store.state.newPosts }}
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";
export default {
  emits: ["closePopup"],
  setup() {
    const store = useStore();
    const newPosts = computed(() => store.state.newPosts);
    const title = computed({
      get: () => store.state.newPost.title,
      set: (value) => store.commit("UPDATE_INPUT_TITLE", value),
    });
    const user = computed({
      get: () => store.state.newPost.user,
      set: (value) => store.commit("UPDATE_INPUT_USER", value),
    });
    return { title, user, newPosts };
  },
};
// computed: {
//   inputTitle: {
//     get() {
//       return this.$store.state.newPost.title;
//     },
//     set(value) {
//       this.$store.commit("updateInputTitle", value);
//     },
//   },
//   inputUser: {
//     get() {
//       return this.$store.state.newPost.user;
//     },
//     set(value) {
//       this.$store.commit("updateInputUser", value);
//     },
//   },
// },
</script>

<style src="./AddPost.scss" lang="scss"></style>
