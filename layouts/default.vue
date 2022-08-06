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
  beforeMount() {
    // this.$store.dispatch("getUserLocation");
    console.log("Getting DB Products:::");

    this.$store.dispatch("getDbProducts");
  },
};
</script>

<style>
body {
  @apply font-mono;
}
</style>
