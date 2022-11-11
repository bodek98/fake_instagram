<template>
  <ul class="relations__items">
    <li class="relations__profile">
      <img class="relations__profile--image" :src="relationImage" alt="" />
      <p class="relations__user">{{ user }}</p>
    </li>
    <li class="relations__profile">
      <img class="relations__profile--image" :src="relationImage" alt="" />
      <p class="relations__user">{{ user }}</p>
    </li>
    <li class="relations__profile">
      <img class="relations__profile--image" :src="relationImage" alt="" />
      <p class="relations__user">{{ user }}</p>
    </li>
    <li class="relations__profile">
      <img class="relations__profile--image" :src="relationImage" alt="" />
      <p class="relations__user">{{ user }}</p>
    </li>
    <li class="relations__profile">
      <img class="relations__profile--image" :src="relationImage" alt="" />
      <p class="relations__user">{{ user }}</p>
    </li>
    <li class="relations__profile">
      <img class="relations__profile--image" :src="relationImage" alt="" />
      <p class="relations__user">{{ user }}</p>
    </li>
  </ul>
</template>

<script>
import { ref } from "vue";
export default {
  name: "PostSingle",
  props: {
    user: {
      type: String,
      required: true,
    },
  },
  setup() {
    let profileId = ref(Math.floor(Math.random() * (10000 - 1000) + 1000));
    let postId = ref(Math.floor(Math.random() * (10000 - 1000) + 1000));
    let profileImage = ref(
      "https://picsum.photos/seed/" + profileId.value + "/500/600"
    );
    let relationImage = ref(
      "https://picsum.photos/seed/" + postId.value + "/500/600"
    );
    return {
      profileId,
      postId,
      profileImage,
      relationImage,
    };
  },
};
</script>
