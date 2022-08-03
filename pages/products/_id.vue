<template>
  <main>
    <section class="backButtonSection">
      <button class="backBtn" @click="goBack">
        <svg
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 485 485"
          style="enable-background: new 0 0 485 485"
          xml:space="preserve"
          height="1.2rem"
          fill="black"
        >
          <g>
            <g>
              <path
                d="M471.5,229h-323l84.4-84.4c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0L106.3,233c-2.5,2.5-4,6-4,9.5s1.4,7,4,9.5
			l107.5,107.5c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L148.5,256h323c7.5,0,13.5-6,13.5-13.5S479,229,471.5,229
			z"
              />
              <path
                d="M13.5,45C6,45,0,51,0,58.5v368C0,434,6,440,13.5,440S27,434,27,426.5v-368C27,51,21,45,13.5,45z"
              />
            </g>
          </g>
        </svg>
      </button>
    </section>
    <lingallery
      responsive="true"
      :items="[
        {
          id: 'someid2',
          src: this.productImage,
          thumbnail: this.productImage,
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
      <p class="formerPrice text-gray-400 text-sm"><strike>₵250</strike></p>
      <p class="price">₵150</p>
      <button class="cartButton capitalize">Add to cart</button>
    </div>
  </main>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      selectedSize: "",
    };
  },
  methods: {
    checkProductID: (product) => {
      return product.id == this.$route.params.id;
    },
    goBack() {
      this.$router.go(-1);
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
  computed: {
    productImage() {
      return this.$store.state.currentProduct.data.image_url;
    },
  },
};
</script>

<style scoped>
main {
}
.priceAndDesc {
  @apply flex flex-col items-center justify-center;
}
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
.backBtn {
  @apply pt-4;
}
.cartButton {
  @apply border-black rounded-md border-2 px-4 py-2 uppercase;
}
</style>
