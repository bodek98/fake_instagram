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
            v-model="newPost.user"
            class="popup__input"
            type="text"
            placeholder="Your nickname"
          />
          <input
            v-model="newPost.title"
            class="popup__input"
            type="text"
            placeholder="Title"
          />
          <input class="popup__input" type="file" />
        </div>
        <button class="popup__create-post">Create post</button>
      </form>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { ref } from "vue";
// import { defineEmits } from "vue";
export default {
  emits: ["closePopup"],
  setup(props, { emit }) {
    // const emit = defineEmits(["closePopup"]);
    const store = useStore();
    const newPost = ref({
      user: "",
      title: "",
      id: 0,
      likes: 0,
    });
    const addPost = () => {
      store.commit("ADD_POST", newPost.value);
      emit("closePopup");
    };
    return { newPost, addPost };
  },
};
</script>

<style src="./AddPost.scss" lang="scss"></style>
