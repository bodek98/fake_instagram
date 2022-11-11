<template>
  <div class="popup">
    <button class="popup__close" @click="$emit('closePopup')">X</button>
    <div class="popup__new-post">
      <nav>
        <p class="popup__navbar-p">Add new post</p>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  emits: ["closePopup"],
  setup() {},
};
</script>

<style src="./AddPost.scss" lang="scss"></style>
