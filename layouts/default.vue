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
  // mounted() {
  //   if (navigator.geolocation) {
  //     //check if geolocation is available
  //     navigator.geolocation.getCurrentPosition(function (position) {
  //       console.log("Good");
  //       console.log(position);
  //     });
  //   }
  // },
};
</script>

<style>
body {
  @apply font-mono;
}
</style>
