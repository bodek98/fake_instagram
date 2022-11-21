<template>
  <div class="remove">
    <div class="remove__container">
      <button class="remove__button" @click="deletePost">Remove Post</button>
      <button
        class="remove__button remove__button--border"
        @click="$store.state.isRemovePopupHidden = true"
      >
        Cancel
      </button>
    </div>
  </div>
</template>

<script>
// import { ref } from "@vue/reactivity";
import { useStore } from "vuex";
export default {
  emits: ["closePopup"],
  setup() {
    const store = useStore();
    const deletePost = () => {
      store.commit("DELETE_POST", );
      store.state.isRemovePopupHidden = true;
    };
    return { deletePost };
  },
};
</script>

<style scoped src="./RemovePost.scss" lang="scss"></style>
