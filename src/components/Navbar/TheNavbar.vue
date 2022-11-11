<template>
  <nav v-if="!isNavHidden" class="navbar navbar--top">
    <router-link class="navbar__logo" to="/">fakeInstagram</router-link>
    <input class="navbar__search" type="search" placeholder="Search" />
    <button class="navbar__button navbar__link navbar__heart">
      <font-awesome-icon icon="fa-regular fa-heart" />
    </button>
  </nav>
  <nav v-if="!isNavHidden" class="navbar navbar--bottom">
    <router-link class="navbar__link" to="/">
      <font-awesome-icon icon="fa-solid fa-house" />
    </router-link>
    <router-link class="navbar__link" to="/explore">
      <font-awesome-icon icon="fa-solid fa-compass" />
    </router-link>
    <button class="navbar__button navbar__link" @click="$emit('addPost')">
      <font-awesome-icon icon="fa-regular fa-square-plus" />
    </button>
    <router-link class="navbar__link" to="/message">
      <font-awesome-icon icon="fa-solid fa-comment" />
    </router-link>
    <router-link class="navbar__link" to="/profile">
      <font-awesome-icon icon="fa-solid fa-user" />
    </router-link>
  </nav>
  <nav v-else class="navbar navbar--left">
    <button class="navbar__button navbar__link navbar__link--instagram">
      <font-awesome-icon icon="fa-brands fa-instagram" />
    </button>
    <router-link class="navbar__link" to="/">
      <font-awesome-icon icon="fa-solid fa-house" />
    </router-link>
    <button class="navbar__button navbar__link">
      <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
    </button>
    <router-link class="navbar__link" to="/explore">
      <font-awesome-icon icon="fa-solid fa-compass" />
    </router-link>
    <router-link class="navbar__link" to="/message">
      <font-awesome-icon icon="fa-solid fa-comment" />
    </router-link>
    <button class="navbar__button navbar__link">
      <font-awesome-icon icon="fa-regular fa-heart" />
    </button>
    <button class="navbar__button navbar__link" @click="$emit('addPost')">
      <font-awesome-icon icon="fa-regular fa-square-plus" />
    </button>
    <router-link class="navbar__link" to="/profile">
      <font-awesome-icon icon="fa-solid fa-user" />
    </router-link>
  </nav>
</template>

<script>
import { onBeforeUnmount, onMounted, ref, watch } from "vue";
export default {
  emits: ["addPost"],
  setup() {
    let clientWidth = ref(window.innerWidth);
    let isNavHidden = ref(clientWidth.value <= 768 ? false : true);
    onMounted(() => {
      window.addEventListener("resize", () => {
        clientWidth.value = window.innerWidth;
      });
    });
    onBeforeUnmount(() => {
      window.removeEventListener("resize", () => {
        clientWidth.value = window.innerWidth;
      });
    });
    watch(clientWidth, (value) => {
      if (value <= 768) {
        isNavHidden.value = false;
      } else {
        isNavHidden.value = true;
      }
    });
    return {
      isNavHidden,
      clientWidth,
    };
  },
};
</script>

<style src="./TheNavbar.scss" lang="scss"></style>
