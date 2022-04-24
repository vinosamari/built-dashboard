<template>
  <div>
    <store-product-card v-for="(product, id) in products" :key="id">
      <h1 slot="header">{{ product.name }}</h1>
      <img :src="product.image_url" :alt="product.name" slot="image" />
      <div class="radioGroup" slot="buttonGroup">
        <label :for="product.name" v-for="size in product.sizes" :key="size.id"
          ><input
            type="radio"
            :name="product.name"
            :id="product.name"
            :value="size"
            v-model="selectedSize"
          />{{ size }}</label
        >
      </div>
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
      selectedSize: "",
    };
  },
  methods: {
    // sizeValue(e) {
    //   this.selectedSize = e.target.value;
    //   console.log(this.selectedSize);
    // },
  },
};
</script>

<style scoped>
.radioGroup {
  @apply grid auto-rows-fr text-black w-full py-1 px-2 uppercase text-xs font-bold;
}
label {
  @apply flex gap-x-1 bg-transparent my-2;
}
input {
  @apply p-2;
}
</style>
