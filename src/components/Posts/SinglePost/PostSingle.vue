<template>
  <div class="post">
    <nav class="post__navbar">
      <div class="post__profile">
        <img
          class="post__profile--image"
          src="@/assets/31047099480_2d76a224d2_z.jpg"
          alt=""
        />
      </div>
      <p class="post__p">elo</p>
      <font-awesome-icon class="post__more" icon="fa-solid fa-ellipsis" />
    </nav>
    <img
      class="post__image"
      src="@/assets/31047099480_2d76a224d2_z.jpg"
      alt=""
    />
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
      <div class="post__social-content">Title: {{ title }}</div>
      <div class="post__social-content">Likes: {{ likes }}</div>
      <div class="post__social-content">Comms: {{ comments }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostSingle",
  setup() {
    
  }
};
</script>

<style src="./PostSingle.css"></style>
