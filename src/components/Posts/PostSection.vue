<template>
  <div v-if="posts.length" class="posts">
    <PostSingle
      v-for="newPost in newPosts"
      :id="newPost.id"
      :key="newPost.id"
      :user="newPost.user"
      :title="newPost.title"
      :likes="newPost.likes"
    />
    <PostSingle
      v-for="post in posts"
      :id="post.id"
      :key="post.id"
      :user="post.user"
      :title="post.title"
      :likes="post.likes"
    ></PostSingle>
  </div>
</template>

<script>
import PostSingle from "./SinglePost/PostSingle.vue";
import { ref, onMounted, computed } from "vue";
import { useStore } from "vuex";

export default {
  components: {
    PostSingle,
  },
  setup() {
    const store = useStore();
    let page = ref(1);
    const posts = computed(() => {
      return store.state.posts;
    });
    const newPosts = computed(() => {
      return store.state.newPosts;
    });
    const fetchPosts = onMounted(() => {
      store.dispatch("fetchPosts");
    });
    const fetchScrolledPosts = onMounted(() => {
      store.dispatch("fetchScrolledPosts");
    });
    const infiniteScroll = onMounted(() => {
      window.addEventListener("scroll", handleScroll);
    });
    const handleScroll = (isVisible) => {
      if (!isVisible) return;
      if (page.value >= 21) return;
      if (window.scrollY + window.innerHeight >= document.body.scrollHeight) {
        fetchScrolledPosts();
        page.value++;
      }
    };
    onMounted(() => {
      fetchPosts();
      infiniteScroll();
    });

    return {
      posts,
      newPosts,
    };
  },
};
</script>

<style src="./PostSection.scss" lang="scss"></style>
