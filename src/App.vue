<template>
  <TheNavbar @add-post="addPost" />
  <AddPost />
  <router-view />
</template>

<script>
import TheNavbar from "./components/Navbar/TheNavbar.vue";
import AddPost from "./components/AddPost.vue";
import { ref } from "@vue/reactivity";

export default {
  components: {
    TheNavbar,
    AddPost,
  },
  setup() {
    let isPopupHidden = ref(true);
    const addPost = () => {
      isPopupHidden.value = !isPopupHidden.value;
    };
    return {
      addPost,
      isPopupHidden,
    };
  },
};
</script>

<style src="./App.scss" lang="scss"></style>
