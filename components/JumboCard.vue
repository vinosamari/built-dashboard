<template>
  <section>
    <product-card>
      <h1 slot="header">GameBoy</h1>
    </product-card>

    <product-card><h1 slot="header">GameGirl</h1></product-card>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
section {
  /* border-left-width: 2rem; */
  @apply w-full md:w-5/6 rounded-lg shadow-2xl h-auto  p-4 my-5 flex-col items-center justify-center md:grid grid-cols-2 md:mx-auto;
}
product-card {
  @apply mx-3;
}
</style>
