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
import RelationSection from "@/components/Relations/RelationSection.vue";
import PostSection from "@/components/Posts/PostSection.vue";

export default {
  components: {
    RelationSection,
    PostSection,
  },
};
</script>

<style>
.home {
  margin-top: 70px;
  margin-bottom: 70px;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  row-gap: 20px;
}
.relationSection,
.postSection {
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>
