<template>
  <div>
    <!-- <h1>{{ this.$store.state.allProducts }}</h1> -->
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
  beforeMount() {
    console.log("Before store mounts:::");
    this.$store.dispatch("getDbProducts");
  },
  mounted() {
    this.$store.dispatch("closeMenu");
    console.log("from STORE PAGE");
    // console.log(this.$store.state.allProducts);
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
