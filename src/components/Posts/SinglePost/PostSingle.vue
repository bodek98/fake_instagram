<template>
  <div class="post">
    <nav class="post__navbar">
      <div class="post__profile">
        <img class="post__profile--image" :src="profileImage" alt="random" />
      </div>
      <p class="post__p">{{ user }}</p>
      <font-awesome-icon
        class="post__more"
        icon="fa-solid fa-ellipsis"
        @click="deletePost"
      />
    </nav>
    <img class="post__image" :src="postImage" alt="random" />
    <div class="post__social">
      <section class="post__social-buttons">
        <font-awesome-icon
          class="post_social-buttons--heart fa-xl"
          icon="fa-regular fa-heart"
          :class="{ 'post_social-button--heartLiked': isLiked }"
          @click="likePost"
        />
        <font-awesome-icon
          class="post_social-buttons--comment fa-xl"
          icon="fa-regular fa-comment"
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
        <strong>{{ localLikes }} likes</strong>
      </div>
      <div class="post__social-content">
        <strong>{{ user }}</strong>
        {{ title }} ID: {{ id }}
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { ref } from "vue";
export default {
  name: "PostSingle",
  props: {
    user: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    likes: {
      type: Number,
      required: true,
    },
    id: {
      type: Number,
      required: true,
    },
    // comments: {
    //   type: Array,
    //   required: true,
    // },
  },
  setup(props) {
    const store = useStore();
    let isLiked = ref(false);
    let profileId = ref(Math.floor(Math.random() * (10000 - 1000) + 1000));
    let postId = ref(Math.floor(Math.random() * (10000 - 1000) + 1000));
    let profileImage = ref(
      "https://picsum.photos/seed/" + profileId.value + "/500/600"
    );
    let postImage = ref(
      "https://picsum.photos/seed/" + postId.value + "/500/600"
    );
    let localLikes = ref(props.likes);
    const likePost = () => {
      if (props.likes - localLikes.value == -1) {
        localLikes.value--;
        isLiked.value = false;
      } else {
        localLikes.value++;
        isLiked.value = true;
      }
    };
    const deletePost = () => {
      store.commit("DELETE_POST", props.id);
      // console.log(props.id);
    };
    return {
      profileId,
      postId,
      profileImage,
      postImage,
      localLikes,
      isLiked,
      likePost,
      deletePost,
    };
  },
};
</script>
