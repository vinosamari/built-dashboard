<template>
  <div>
    <store-product-card
      v-for="(product, id) in products"
      :key="id"
      :product="product"
    >
      <h1 slot="header">{{ product.name }}</h1>
      <img :src="product.image_url" :alt="product.name" slot="image" />
    </store-product-card>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$store.dispatch("closeMenu");
  },
  data() {
    return {
      products: this.$store.state.allProducts,
    };
  },
  methods: {},
};
</script>

<style scoped></style>
