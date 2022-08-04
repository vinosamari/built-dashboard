<template>
  <nuxt-link :to="`/products/${product.id}`">
    <h1 class="header"><slot name="header">Header</slot></h1>
    <slot name="image">
      <img
        src="https://i.postimg.cc/GhyXdB8n/PHOTO-2022-03-30-21-17-01.jpg"
        alt=""
    /></slot>
    <!-- <button><slot name="button"></slot></button> -->
    <h2><slot name="header2"></slot></h2>
  </nuxt-link>
</template>

<script>
export default {
  props: ["product"],
  data() {
    return {
      selectedSize: "m",
    };
  },
};
</script>

<style scoped>
a {
  box-shadow: 10px 70px 136px 34px rgba(0, 0, 0, 0.126);
  @apply w-5/6 md:w-1/2  flex  flex-col items-center justify-center  mb-4 p-7  mx-auto rounded-lg  bg-opacity-80 my-2;
}
h1 {
  @apply text-sm bg-black font-mono tracking-widest px-5 py-2 rounded-sm text-white uppercase font-bold mt-2 text-center shadow-md;
}
img {
  @apply rounded-md h-auto w-full object-cover border-2 border-white md:h-96 md:w-auto shadow-md mb-2;
}
p {
  @apply font-mono capitalize my-2 text-sm px-6 text-center font-bold;
}
.buttonGroup {
  @apply grid grid-cols-3 my-2;
}
/* label {
  @apply uppercase flex items-center text-sm justify-center font-bold px-2;
}
input[type="radio"] {
  @apply bg-gray-400 rounded-md p-2 mx-1 ring-black focus:ring-0;
}
input[type="radio"]:checked {
  @apply bg-black focus:ring-0;
} */
button {
  @apply bg-black font-mono tracking-widest px-10 py-2 rounded-sm text-white uppercase font-bold mt-2;
}
</style>
