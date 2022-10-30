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
      await axios
        .get(`http://localhost:3000/posts?_page=${page.value}`)
        .then((res) => {
          posts.value.push(...res.data); //REPAIR THIS.....
        });
    });
    const handleScroll = (isVisible) => {
      if (!isVisible) {
        return;
      }
      if (
        window.scrollY + window.innerHeight >=
        document.body.scrollHeight - 50
      ) {
        page.value++;
        console.log(page.value);
        getPosts();
      }
    };
    const infiniteScroll = onMounted(() => {
      window.addEventListener("scroll", handleScroll);
      // posts.value.push(getPosts());
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

<style src="./PostSection.css"></style>
