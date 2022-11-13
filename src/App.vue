<template>
  <TheNavbar @add-post="openPopup" />
  <AddPost v-if="!isPopupHidden" @close-popup="closePopup" />
  <router-view />
</template>

<script>
import TheNavbar from "./components/Navbar/TheNavbar.vue";
import AddPost from "./components/AddPost/AddPost.vue";
import { ref } from "@vue/reactivity";

export default {
  components: {
    TheNavbar,
    AddPost,
  },
  setup() {
    let isPopupHidden = ref(true);
    const openPopup = () => {
      isPopupHidden.value = false;
    };
    const closePopup = () => {
      isPopupHidden.value = true;
    };
    return {
      isPopupHidden,
      openPopup,
      closePopup,
    };
  },
};
</script>

<style src="./App.scss" lang="scss"></style>
