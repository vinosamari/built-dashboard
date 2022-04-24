<template>
  <div>
    <nav-bar></nav-bar>
    <Nuxt />
  </div>
</template>

<script>
import NavBar from "~/components/NavBar.vue";
export default {
  components: { NavBar },
  mounted() {
    // this.$store.dispatch("getUserLocation");
    this.$store.dispatch("getDbProducts");
  },
};
</script>

<style>
body {
  @apply font-mono;
}
</style>
