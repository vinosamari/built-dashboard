<template>
  <nav>
    <!-- LATEST ARRIVALS -->
    <section class="arrivals">
      <p class="latest">
        New arrivals |
        <span class="moreInfo">Check out our latest collections</span>
      </p>
    </section>
    <!-- LINKS -->
    <section class="linksSection">
      <div>
        <p class="link">GameBoy</p>
        <p class="link">GameGirl</p>
      </div>
      <p class="logo hidden">Logo</p>
      <p class="currency">NGN</p>
    </section>
    <!-- SIGN UP/ SIGN IN -->
    <section>
      <p class="link">Sign Up</p>
      <p class="link">Sign In</p>
    </section>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
nav {
  @apply p-3;
}
section {
  @apply flex justify-evenly p-3 text-center;
}
.arrivals {
  @apply md:text-base shadow-2xl;
}
.arrivals p {
  @apply text-xs capitalize;
}
.link {
  @apply border-b border-gray-500 pb-1;
}
.linksSection {
  @apply mt-2  border-2 flex items-center justify-between;
}
.linksSection div {
  @apply flex md:gap-x-3 gap-x-5;
}
</style>
