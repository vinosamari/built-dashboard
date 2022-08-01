<template>
  <div>
    <h1 class="header"><slot name="header">Header</slot></h1>
    <slot name="image">
      <img
        src="https://imagedelivery.net/ZfQ8_LKVeZ_L7rmMFmwmcQ/eec16246-5cea-43a1-22c2-efded4575300/square"
        alt=""
    /></slot>
    <slot name="sizesButtonGroup">
      <section class="buttonGroup">
        <label :for="product.name" v-for="size in product.sizes" :key="size.id"
          ><input
            type="radio"
            :name="product.name"
            :id="product.name"
            :value="size"
            v-model="selectedSize"
          />{{ size }}</label
        >
      </section>
    </slot>
    <button><slot name="button">Add to cart</slot></button>
  </div>
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
div {
  box-shadow: 10px 70px 136px 34px rgba(0, 0, 0, 0.126);
  @apply w-3/4 md:w-1/2  flex  flex-col items-center justify-center  mb-4 p-7  mx-auto rounded-lg   bg-gray-100 bg-opacity-80 my-2;
}
h1 {
  @apply text-lg uppercase md:border-0   w-full text-center rounded-sm px-2 font-bold py-1;
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
label {
  @apply uppercase flex items-center text-sm justify-center font-bold px-2;
}
input[type="radio"] {
  @apply bg-gray-400 rounded-md p-2 mx-1 ring-black focus:ring-0;
}
input[type="radio"]:checked {
  @apply bg-black focus:ring-0;
}
button {
  @apply bg-black font-mono tracking-widest px-10 py-2 rounded-sm text-white uppercase font-bold mt-2;
}
</style>
