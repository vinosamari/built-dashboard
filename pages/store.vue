<template>
  <div>
    <store-product-card
      v-for="(product, id) in products"
      :key="id"
      :product="product"
    >
      <h1 slot="header">{{ product.data.name }}</h1>
      <img
        :src="product.data.image_url"
        :alt="product.data.name"
        slot="image"
      />
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
