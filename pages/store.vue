<template>
  <div>
    <store-product-card
      v-for="(product, id) in products"
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
  mounted() {
    this.$store.dispatch("closeMenu");
  },
  data() {
    return {
      products: this.$store.state.allProducts,
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

<style scoped></style>
