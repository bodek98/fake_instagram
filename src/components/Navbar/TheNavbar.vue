<template>
  <nav v-if="!isNavHidden" class="navbar--top navbar--white">
    <router-link class="navbar__p--instagram" to="/">fakeInstagram</router-link>
    <input class="navbar__search" type="search" placeholder="Search" />
    <a class="navbar__heart">
      <font-awesome-icon icon="fa-regular fa-heart" />
    </a>
  </nav>
  <nav v-if="!isNavHidden" class="navbar--bottom navbar--white">
    <router-link class="navbar__a" to="/">
      <font-awesome-icon icon="fa-solid fa-house" />
    </router-link>
    <router-link class="navbar__a" to="/explore">
      <font-awesome-icon icon="fa-solid fa-compass" />
    </router-link>
    <a class="navbar__a">
      <font-awesome-icon icon="fa-regular fa-square-plus" />
    </a>
    <router-link class="navbar__a" to="/message">
      <font-awesome-icon icon="fa-solid fa-comment" />
    </router-link>
    <router-link class="navbar__a" to="/profile">
      <font-awesome-icon icon="fa-solid fa-user" />
    </router-link>
  </nav>
  <nav v-else class="navbar navbar--left navbar--white">
    <button class="navbar__button navbar__a navbar__a--instagram">
      <font-awesome-icon icon="fa-brands fa-instagram" />
    </button>
    <router-link class="navbar__a" to="/">
      <font-awesome-icon icon="fa-solid fa-house" />
    </router-link>
    <button class="navbar__button navbar__a">
      <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
    </button>
    <router-link class="navbar__a" to="/explore">
      <font-awesome-icon icon="fa-solid fa-compass" />
    </router-link>
    <router-link class="navbar__a" to="/message">
      <font-awesome-icon icon="fa-solid fa-comment" />
    </router-link>
    <button class="navbar__button navbar__a">
      <font-awesome-icon icon="fa-regular fa-heart" />
    </button>
    <button class="navbar__button navbar__a">
      <font-awesome-icon icon="fa-regular fa-square-plus" />
    </button>
    <router-link class="navbar__a" to="/profile">
      <font-awesome-icon icon="fa-solid fa-user" />
    </router-link>
  </nav>
</template>

<script>
import { onBeforeUnmount, onMounted, ref } from "vue";

export default {
  setup() {
    let clientWidth = ref(window.innerWidth);
    let isNavHidden = ref(true);
    const resizeMount = onMounted(() => {
      window.addEventListener("resize", hideNav);
    });
    const resizeUnmount = onBeforeUnmount(() => {
      window.removeEventListener("resize", hideNav);
    });
    const hideNav = () => {
      if (clientWidth.value < 767) {
        clientWidth.value = document.documentElement.clientWidth;
        isNavHidden.value = false;
      } else {
        clientWidth.value = document.documentElement.clientWidth;
        isNavHidden.value = true;
      }
    };
    onMounted({
      resizeMount,
      hideNav,
    });
    onBeforeUnmount({
      resizeUnmount,
    });
    return {
      isNavHidden,
      clientWidth,
    };
  },
};
</script>

<style src="./TheNavbar.css"></style>
