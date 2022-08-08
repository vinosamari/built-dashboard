<template>
  <div>
    <h1 v-if="!this.$store.state.allProducts" class="loading">Loading...</h1>
    <h1 class="font-bold uppercase text-xl tracking-wider text-center">
      Store
    </h1>
    <store-product-card
      v-for="(product, id) in this.$store.state.allProducts"
      :key="id"
      :product="product"
    >
      <h1 slot="header">{{ product.data.name }}</h1>
      <!-- <h2 slot="header2">{{ product.data.images[0] }}</h2> -->
      <img
        :src="product.data.images[0]"
        :alt="product.data.name"
        slot="image"
      />
    </store-product-card>
  </div>
</template>

<script>
export default {
  async beforeMount() {
    await this.$store.dispatch("getDbProducts");
  },
  mounted() {
    this.$store.dispatch("closeMenu");
    this.products = this.$store.state.allProducts;
  },
  data() {
    return {
      products: [],
    };
  },
  computed: {
    firstImage() {
      let first = this.products.forEach((product) => {
        return product.data.images[0];
      });
      return first;
    },
  },
  methods: {},
};
</script>

<style scoped>
.loading {
  @apply text-center;
}
</style>
