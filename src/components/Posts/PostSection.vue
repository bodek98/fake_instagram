<template>
  <div v-if="posts.length" class="posts">
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
    const scrollPosts = onMounted(async () => {
      await axios
        .get(`http://localhost:3000/posts?_page=${page.value}&_limit=5`)
        .then((res) => {
          page.value++;
          posts.value = [...posts.value, ...res.data];
        });
    });
    // const addPosts = onMounted(async () => {
    //   await axios.post(`http://localhost:3000/posts`, {
    //     id: 0,
    //     user: "Random",
    //     title: "mauris ut",
    //     likes: 0,
    //     date: "May 24  2022",
    //   });
    // });
    const handleScroll = (isVisible) => {
      if (!isVisible) return;
      if (page.value >= 21) return;
      if (window.scrollY + window.innerHeight >= document.body.scrollHeight) {
        scrollPosts();
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
      // addPosts,
    };
  },
};
</script>

<style src="./PostSection.scss" lang="scss"></style>
