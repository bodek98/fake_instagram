<template>
  <div class="relations">
    <RelationSingle user="user"></RelationSingle>
  </div>
</template>

<script>
import RelationSingle from "./SingleRelation/RelationSingle.vue";

export default {
  components: {
    RelationSingle,
  },
};
</script>

<style src="./RelationSection.css"></style>
