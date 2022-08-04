<template>
  <div>
    <nav-bar></nav-bar>
    <Nuxt />
    <Footer></Footer>
  </div>
</template>

<script>
import NavBar from "~/components/NavBar.vue";
import Footer from "~/components/Footer.vue";
export default {
  components: { NavBar, Footer },
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
