<template>
  <TheNavbar></TheNavbar>
  <router-view />
</template>

<script>
import TheNavbar from "./components/Navbar/TheNavbar.vue";

export default {
  components: {
    TheNavbar,
  },
};
</script>

<style src="./App.scss" lang="scss"></style>
