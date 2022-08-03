<template>
  <main>
    <!-- BACK BUTTON -->
    <section class="backButtonSection">
      <button class="backBtn" @click="goBack">
        <svg
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 384.967 384.967"
          style="enable-background: new 0 0 384.967 384.967"
          xml:space="preserve"
          fill="white"
          height="2rem"
        >
          <g>
            <g id="Arrow_Dotted_Right_1_">
              <path
                d="M107.175,281.571C105.407,285.974,107.849,279.959,107.175,281.571L107.175,281.571z"
              />
              <path
                d="M3.438,200.812l84.08,84.561c5.943,6.232,16.469,4.138,19.658-3.79c0.674-1.612,0.95-3.32,0.902-5.041V108.359
			c0.289-10.671-12.872-16.602-20.476-8.926L3.438,183.621C-1.146,188.264-1.146,196.168,3.438,200.812z M84.209,137.34v109.692
			l-55.279-54.81L84.209,137.34z"
              />
              <path
                d="M156.391,228.277c19.934,0,36.091-16.157,36.091-36.091s-16.157-36.091-36.091-36.091S120.3,172.252,120.3,192.186
			S136.457,228.277,156.391,228.277z M156.391,180.156c6.641,0,12.03,5.39,12.03,12.03c0,6.641-5.39,12.03-12.03,12.03
			s-12.03-5.39-12.03-12.03C144.361,185.545,149.75,180.156,156.391,180.156z"
              />
              <path
                d="M252.633,228.277c19.934,0,36.091-16.157,36.091-36.091s-16.157-36.091-36.091-36.091s-36.091,16.157-36.091,36.091
			S232.699,228.277,252.633,228.277z M252.633,180.156c6.641,0,12.03,5.39,12.03,12.03c0,6.641-5.39,12.03-12.03,12.03
			c-6.641,0-12.03-5.39-12.03-12.03C240.603,185.545,245.993,180.156,252.633,180.156z"
              />
              <path
                d="M348.876,228.277c19.934,0,36.091-16.157,36.091-36.091s-16.157-36.091-36.091-36.091
			c-19.934,0-36.091,16.157-36.091,36.091S328.942,228.277,348.876,228.277z M348.876,180.156c6.641,0,12.03,5.39,12.03,12.03
			c0,6.641-5.39,12.03-12.03,12.03c-6.641,0-12.03-5.39-12.03-12.03C336.845,185.545,342.235,180.156,348.876,180.156z"
              />
            </g>
          </g>
        </svg>
        <span class="text-white ml-2 text-xs">BACK TO STORE</span>
      </button>
    </section>
    <!-- PRODUCT NAME -->
    <h1 class="productName">
      {{ this.$store.state.currentProduct.data.name.toUpperCase() }}
    </h1>
    <!-- <h1>{{ this.productImages }}</h1> -->
    <!-- IMAGE CAROUSEL -->
    <lingallery :items="this.productImages" />

    <div class="priceAndDesc">
      <div class="priceSection">
        <p class="formerPrice text-gray-400 text-sm">
          <strike>₵{{ this.productPrice + 50 }}</strike>
        </p>
        <p class="price">₵{{ this.productPrice }}</p>
      </div>
      <p class="desc">Brief description of the piece.</p>
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
    console.log(this.$store.state.allProducts);

    let prod = this.$store.state.allProducts.find((item) => {
      return item.id == this.$route.params.id;
    });
    this.$store.dispatch("setProduct", prod);
    // console.log(prod);
  },
  computed: {
    productImages() {
      let images = this.$store.state.currentProduct.data.images;
      let itemsArr = [];
      images.forEach((image) => {
        let imageObj = {
          id: 0,
          src: image,
          thumbnail: image,
        };
        console.log(image);
        imageObj.id += 1;
        itemsArr.push(imageObj);
      });

      return itemsArr;
    },
    productPrice() {
      return this.$store.state.currentProduct.data.price;
    },
  },
};
</script>

<style scoped>
main {
  @apply flex flex-col text-center font-customOne;
}
.productName {
  @apply my-2 text-lg font-bold;
}
.priceAndDesc {
  @apply flex flex-col items-center justify-center;
}
.desc,
.priceSection {
  @apply my-2;
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
  @apply bg-black w-full flex items-center px-4 py-2 font-bold;
}
.cartButton {
  @apply border-black rounded-md border-2 px-4 py-2 uppercase font-bold;
}
</style>
