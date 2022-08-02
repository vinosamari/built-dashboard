<template>
  <section>
    <client-only>
      <product-card
        class="prodCard"
        v-for="product in productIntro"
        :key="product.id"
      >
        <h1 slot="header">Check out our newest arrivals</h1>
        <img slot="image" :src="product.image" alt="" />
        <!-- <p slot="details">{{ product.details }}</p> -->
        <nuxt-link to="/store" slot="button">Press Start</nuxt-link>
      </product-card>
    </client-only>
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
          details: "The GAME Social Night collection.",
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
h1 {
  @apply border-b pb-2 border-black md:w-1/2 mx-auto font-bold;
}
a {
  @apply bg-black font-mono tracking-widest px-10 py-2 rounded-sm text-white uppercase font-bold my-3 animate-pulse text-sm md:text-base shadow-2xl;
}
</style>
