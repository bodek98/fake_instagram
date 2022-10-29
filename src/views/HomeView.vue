<template>
  <div class="home">
    awda
    <RelationSection></RelationSection>
  </div>
</template>

<script>
// @ is an alias to /src
import RelationSection from "@/components/Relations/RelationSection.vue";
// import axios from "axios";

export default {
  components: RelationSection,
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
}
</style>
