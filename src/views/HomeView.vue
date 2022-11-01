<template>
  <div class="home">
    <div class="relationSection">
      <RelationSection></RelationSection>
    </div>
    <div class="postSection">
      <PostSection></PostSection>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import RelationSection from "@/components/Relations/RelationSection.vue";
import PostSection from "@/components/Posts/PostSection.vue";
// import axios from "axios";

export default {
  components: {
    RelationSection,
    PostSection,
  },
  // async created() {
  //   try {
  //     const res = await axios.get(`http://localhost:3000/posts`);
  //     this.posts = res.data;
  //   } catch (e) {
  //     console.error(e);
  //   }
  // },
};
</script>

<style>
.home {
  margin-top: 70px;
  margin-bottom: 70px;
  width: 90%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  row-gap: 20px;
}
.relationSection {
  width: 100%;
  display: flex;
  justify-content: center;
}
.postSection {
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>
