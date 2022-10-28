<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <ul>
      <li v-for="post in posts" :key="post.id">
        {{ post.title }}
      </li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";

export default {
  name: "HomeView",
  data() {
    return {
      posts: [],
    };
  },
  async created() {
    try {
      const res = await axios.get(`http://localhost:3000/posts`);
      this.posts = res.data;
    } catch (e) {
      console.error(e);
    }
  },
};
</script>
