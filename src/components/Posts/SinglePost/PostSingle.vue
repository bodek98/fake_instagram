<template>
  <div class="post">
    <nav class="post__navbar">
      <div class="post__profile">
        <img class="post__profile--image" :src="profileImage" alt="random" />
      </div>
      <p class="post__p">{{ user }}</p>
      <font-awesome-icon class="post__more" icon="fa-solid fa-ellipsis" />
    </nav>
    <img class="post__image" :src="postImage" alt="random" />
    <div class="post__social">
      <section class="post__social-buttons">
        <font-awesome-icon
          class="post_social-buttons--heart fa-xl"
          icon="fa-regular fa-heart"
        />
        <font-awesome-icon
          class="post_social-buttons--comment fa-xl"
          icon="fa-solid fa-comment"
        />
        <font-awesome-icon
          class="post_social-buttons--dm fa-xl"
          icon="fa-regular fa-paper-plane"
        />
        <font-awesome-icon
          class="post_social-buttons--bookmark fa-xl"
          icon="fa-regular fa-bookmark"
        />
      </section>
      <div class="post__social-content">
        <strong>{{ likes }} likes</strong>
      </div>
      <div class="post__social-content">
        <strong>{{ user }}</strong>
        {{ title }}
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "PostSingle",
  props: {
    user: String,
    title: String,
    likes: Number,
    comments: Array,
  },
  setup() {
    let profileId = ref(Math.floor(Math.random() * (10000 - 1000) + 1000));
    let postId = ref(Math.floor(Math.random() * (10000 - 1000) + 1000));
    let profileImage = ref(
      "https://picsum.photos/seed/" + profileId.value + "/500/600"
    );
    let postImage = ref(
      "https://picsum.photos/seed/" + postId.value + "/500/600"
    );
    return {
      profileId,
      postId,
      profileImage,
      postImage,
    };
  },
};
</script>

<style src="./PostSingle.css"></style>
