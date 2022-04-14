<template>
  <section>
    <slot>
      <product-card v-for="product in productIntro" :key="product.id">
        <h1 slot="header">Check out our newest arrivals</h1>
        <img slot="image" :src="product.image" alt="" />
        <p slot="details">{{ product.details }}</p>
      </product-card>
    </slot>
  </section>
</template>

<script>
export default {
  data() {
    return {
      productIntro: [
        {
          header: "Featured Product",
          image:
            "https://imagedelivery.net/ZfQ8_LKVeZ_L7rmMFmwmcQ/170abb67-7386-4a50-0626-982ba9f1e200/square",
          details:
            "The Social Night collection does blah blah blah but it brings out more in blah blah",
        },
      ],
    };
  },
};
</script>

<style scoped>
section {
  @apply w-5/6 rounded-sm  h-auto  p-4 my-5 flex-col items-center justify-center md:grid mx-auto;
}
product-card {
  @apply mx-3;
}
</style>
