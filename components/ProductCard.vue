<template>
  <main>
    <slot name="header"><h1 class="header">Product header</h1></slot>
    <slot><img src="https://picsum.photos/300/300" alt="productImg" /></slot>
    <slot><p class="body">Details about the collection or piece</p></slot>
    <slot name="button"><button>Press start</button></slot>
  </main>
</template>

<script>
export default {};
</script>

<style scoped>
main {
  @apply md:w-5/6 w-full  flex  flex-col items-center justify-center shadow-2xl my-4 p-7  mx-auto rounded-lg border border-gray-100 bg-gray-200 bg-opacity-80;
}
h1 {
  @apply text-xl my-3 uppercase border border-gray-300 md:border-0  w-full text-center rounded-sm;
}
img {
  @apply mb-4 rounded-sm;
}
p {
  @apply font-mono font-light text-sm px-6 text-center;
}
button {
  @apply bg-black font-mono tracking-widest px-10 py-2 rounded-sm text-white uppercase font-bold my-3 animate-pulse;
}
</style>
