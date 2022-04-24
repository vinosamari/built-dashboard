<template>
  <hero></hero>
</template>

<script>
import Hero from "~/components/Hero.vue";
export default {
  components: { Hero },
  mounted() {
    this.$store.dispatch("closeMenu");
  },
};
</script>

<style scoped></style>
