<template>
  <nav class="navbar navbar--top navbar--white">
    <p class="navbar__p navbar__p--instagram">fakeInstagram</p>
    <input class="navbar__search" type="search" placeholder="Search" />
    <a class="navbar__heart gg-heart"></a>
  </nav>
  <nav class="navbar navbar--bottom navbar--white">
    <router-link class="navbar__a gg-home" to="/"></router-link>
    <router-link class="navbar__a gg-menu-grid-r" to="/explore"></router-link>
    <a class="navbar__a gg-add"></a>
    <router-link class="navbar__a gg-instagram" to="/message"></router-link>
    <router-link class="navbar__a gg-profile" to="/profile"></router-link>
  </nav>
</template>

<script></script>

<style src="./TheNavbar.css"></style>
