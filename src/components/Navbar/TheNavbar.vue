<template>
  <nav class="navbar navbar--top navbar--white">
    <router-link class="navbar__p--instagram" to="/">fakeInstagram</router-link>
    <input class="navbar__search" type="search" placeholder="Search" />
    <a class="navbar__heart">
      <font-awesome-icon icon="fa-regular fa-heart" />
    </a>
  </nav>
  <nav class="navbar--bottom navbar--white">
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
</template>

<script></script>

<style src="./TheNavbar.css"></style>
