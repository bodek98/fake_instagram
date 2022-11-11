<template>
  <div class="posts" v-if="posts.length">
    <PostSingle
      v-for="post in posts"
      :key="post.id"
      :user="post.user"
      :title="post.title"
      :likes="post.likes"
    ></PostSingle>
  </div>
</template>

<script>
import PostSingle from "./SinglePost/PostSingle.vue";
import axios from "axios";
import { ref, onMounted } from "vue";

export default {
  components: {
    PostSingle,
  },
  setup() {
    const posts = ref([]);
    let page = ref(1);

    const getPosts = onMounted(async () => {
      try {
        await axios
          .get(`http://localhost:3000/posts?_page=${page.value}&_limit=5`)
          .then((res) => {
            posts.value = res.data;
          });
      } catch (error) {
        console.error(error);
      }
    });
    const addPosts = onMounted(async () => {
      await axios
        .get(`http://localhost:3000/posts?_page=${page.value}&_limit=5`)
        .then((res) => {
          page.value++;
          posts.value = [...posts.value, ...res.data];
        });
    });
    const handleScroll = (isVisible) => {
      if (!isVisible) return;
      if (page.value >= 21) return;
      if (window.scrollY + window.innerHeight >= document.body.scrollHeight) {
        addPosts();
      }
    };
    const infiniteScroll = onMounted(() => {
      window.addEventListener("scroll", handleScroll);
    });

    onMounted(() => {
      getPosts();
      infiniteScroll();
    });

    return {
      posts,
    };
  },
};
</script>

<style src="./PostSection.scss" lang="scss"></style>
