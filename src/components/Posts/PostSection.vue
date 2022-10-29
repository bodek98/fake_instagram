<template>
  <div class="posts">
    <PostSingle></PostSingle>
    <PostSingle></PostSingle>
    <PostSingle></PostSingle>
  </div>
</template>

<script>
import PostSingle from "./SinglePost/PostSingle.vue";

export default {
  components: {
    PostSingle,
  },
  name: "PostSection",
};
</script>

<style src="./PostSection.css"></style>
