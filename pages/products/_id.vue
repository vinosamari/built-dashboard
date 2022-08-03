<template>
  <main>
    <lingallery
      responsive="true"
      :items="[
        {
          id: 'someid2',
          src: this.$store.state.currentProduct.data.image_url,
          thumbnail: this.$store.state.currentProduct.data.image_url,
          alt: 'Another alt text',
          caption: this.$store.state.currentProduct.data.name.toUpperCase(),
        },
        {
          id: 'someid3',
          src: 'https://picsum.photos/400/600/?image=20',
          thumbnail: 'https://picsum.photos/64/64/?image=20',
        },
      ]"
    />
    <div class="priceAndDesc">
      <p class="formerPrice text-gray-500 text-sm"><strike>₵250</strike></p>
      <p class="price">₵150</p>
    </div>
  </main>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      selectedSize: "",

      items: [
        {
          src: "https://picsum.photos/600/400/?image=0",
          thumbnail: "https://picsum.photos/64/64/?image=0",
          caption: "Some Caption",
          id: "someid1",
        },
        {
          src: "https://picsum.photos/600/400/?image=10",
          thumbnail: "https://picsum.photos/64/64/?image=10",
        },
      ],
    };
  },
  methods: {
    checkProductID: (product) => {
      return product.id == this.$route.params.id;
    },
  },
  mounted() {
    // let product = {}
    // console.log(this.$store.state.allProducts);

    let prod = this.$store.state.allProducts.find((item) => {
      return item.id == this.$route.params.id;
    });
    this.$store.dispatch("setProduct", prod);
    console.log(prod);
  },
  // computed: {
  //   productImage() {
  //     return prod.data.image_url;
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
