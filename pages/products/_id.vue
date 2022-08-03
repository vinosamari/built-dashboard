<template>
  <div>
    <!-- <img
      src="https://www.dropbox.com/s/ojjh7jrvnu56npr/ASH_PACMAN_HOODIE_FRONT.webp"
      alt=""
    /> -->
    <!-- {{ getProduct }} -->
    <!-- <lingallery
      :width="600"
      :height="400"
      :items="[
        {
          id: 'someid1',
          src: 'https://picsum.photos/600/400/?image=0',
          thumbnail: 'https://picsum.photos/64/64/?image=0',
          alt: 'Some alt text',
          caption: 'Some Caption',
        },
        {
          id: 'someid2',
          src: 'https://picsum.photos/600/400/?image=10',
          thumbnail: 'https://picsum.photos/64/64/?image=10',
          alt: 'Another alt text',
          caption: 'Another Caption',
        },
        {
          id: 'someid3',
          src: 'https://picsum.photos/400/600/?image=20',
          thumbnail: 'https://picsum.photos/64/64/?image=20',
        },
      ]"
    /> -->
    {{ this.product }}
    <!-- <img :src="getProduct.data.image_url" alt="" /> -->
    <!--<h1>{{ getProduct.data.name }}</h1>
    <section class="buttonGroup">
      <label
        :for="getProduct.data.name"
        v-for="size in getProduct.data.sizes"
        :key="size.id"
        ><input
          type="radio"
          :name="getProduct.data.name"
          :id="getProduct.data.name"
          :value="size"
          v-model="selectedSize"
        />{{ size }}</label
      >
    </section>
    <h2>{{ getProduct.data.price }} Ghs</h2> -->
  </div>
</template>

<script>
// export default {
//   async asyncData({ params, redirect }) {
//     const allProducts = this.$store.state.allProducts;

//     const filteredProduct = allProducts.find(
//       (product) => product.id == params.id
//     );
//     if (filteredProduct) {
//       return {
//         filteredProduct,
//       };
//     } else {
//       redirect("/");
//     }
//   },
// };

import { mapState } from "vuex";
export default {
  data() {
    return {
      selectedSize: "",
      product: null,
    };
  },
  mounted() {
    console.log(this.$store.state.allProducts);

    let prod = this.$store.state.allProducts.find(
      (product) => product.id == this.$route.params.id
    );
    this.product = prod;
  },
  // computed: {
  //   ...mapState(["allProducts"]),
  //   getProduct() {
  //     let prod = this.$store.state.allProducts.find(
  //       (product) => product.id == this.$route.params.id
  //     );
  //     return prod;
  //   },
  // },
};
</script>

<style scoped>
section {
  @apply flex justify-evenly;
}
label {
  @apply uppercase flex items-center text-sm justify-center font-bold
px-2;
}
input[type="radio"] {
  @apply bg-gray-400 rounded-md p-2 mx-1 ring-black
focus:ring-0;
}
input[type="radio"]:checked {
  @apply bg-black focus:ring-0;
}
</style>
