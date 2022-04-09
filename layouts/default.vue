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
};
</script>

<style>
body {
  @apply font-mono;
}
</style>
