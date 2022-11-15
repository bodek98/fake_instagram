<template>
  <div v-if="posts.length" class="posts">
    <PostSingle
      v-for="newPost in newPosts"
      :id="Math.random()"
      :key="newPost.id"
      :user="newPost.user"
      :title="newPost.title"
      :likes="newPost.likes"
    />
    <PostSingle
      v-for="post in posts"
      :id="Math.random()"
      :key="post.id"
      :user="post.user"
      :title="post.title"
      :likes="post.likes"
    ></PostSingle>
  </div>
</template>

<script>
import PostSingle from "./SinglePost/PostSingle.vue";
import { ref, onMounted } from "vue";
import { useStore } from "vuex";

export default {
  components: {
    PostSingle,
  },
  setup() {
    const store = useStore();
    const posts = ref(store.state.posts);
    const newPosts = ref(store.state.newPosts);
    let page = ref(1);
    const handleScroll = (isVisible) => {
      if (!isVisible) return;
      if (page.value >= 21) return;
      if (window.scrollY + window.innerHeight >= document.body.scrollHeight) {
        store.dispatch("fetchScrolledPosts");
        page.value++;
      }
    };
    onMounted(() => {
      store.dispatch("fetchPosts");
      // store.dispatch("fetchScrolledPosts")
      window.addEventListener("scroll", handleScroll);
    });

    return {
      posts,
      newPosts,
    };
  },
};
</script>

<style src="./PostSection.scss" lang="scss"></style>
