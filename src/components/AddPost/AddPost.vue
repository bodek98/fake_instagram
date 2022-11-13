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
            v-model="inputUser"
            class="popup__input"
            type="text"
            placeholder="Your nickname"
          />
          <input
            v-model="inputTitle"
            class="popup__input"
            type="text"
            placeholder="Title"
          />
          <input class="popup__input" type="file" />
          {{ $store.state.newPosts }}
        </div>
        <button
          class="popup__create-post"
          @click="store.dispatch('createPost')"
        >
          Create post
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { useStore, computed } from "vuex";
export default {
  emits: ["closePopup"],
  setup() {
    const store = useStore();
    const inputTitle = computed({
      get() {
        return store.state.newPost.title;
      },
      set(value) {
        store.commit("updateInput", value);
      },
    });
    const inputUser = computed({
      get() {
        return store.state.newPost.user;
      },
      set(value) {
        store.commit("updateInput", value);
      },
    });
    return { store, inputTitle, inputUser };
  },
};
</script>

<style src="./AddPost.scss" lang="scss"></style>
