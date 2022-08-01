<template>
  <div>
    <slot>
      <h1 class="header"><slot name="header">Header</slot></h1>
      <slot name="image">
        <img
          src="https://imagedelivery.net/ZfQ8_LKVeZ_L7rmMFmwmcQ/eec16246-5cea-43a1-22c2-efded4575300/square"
          alt=""
      /></slot>
      <p class="body"><slot name="details">Info goes here</slot></p>
      <slot name="button"><nuxt-link to="/">Press start</nuxt-link></slot>
    </slot>
  </div>
</template>

<script>
export default {
  props: ["product"],
  mounted() {
    this.setAnimation();
  },
  methods: {
    setAnimation() {
      this.$anime({
        targets: [".prodCard", ".header", ".image", ".body", ".button"],
        opacity: [0, 1],
        duration: 2000,
        delay: this.$anime.stagger(100),
        easing: "easeInOutSine",
      });
    },
  },
};
</script>

<style scoped>
div {
  box-shadow: 10px 70px 136px 34px rgba(0, 0, 0, 0.26);
  @apply w-full  flex  flex-col items-center justify-center  mb-4 p-7  mx-auto rounded-lg   bg-gray-200 bg-opacity-80;
}
h1 {
  @apply text-sm  md:text-xl my-3 uppercase md:border-0  w-full text-center rounded-sm px-4;
}
img {
  @apply mb-4 rounded-md h-auto w-64 object-cover border-2 border-white md:h-96 md:w-auto;
}
p {
  @apply font-mono capitalize my-2 text-sm px-6 text-center font-bold;
}
a {
  @apply bg-black font-mono tracking-widest px-10 py-2 rounded-sm text-white uppercase font-bold my-3 animate-pulse;
}
</style>
