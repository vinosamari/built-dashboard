<template>
  <nav>
    <!-- DISCORD ARRIVALS -->
    <section class="arrivals">
      <p class="discord">
        Join our discord |
        <span class="moreInfo">Get free merch & Perks</span>
      </p>
    </section>
    <!-- WIDE DISPLAY LINKS -->
    <section class="linksSection">
      <div>
        <nuxt-link to="/" class="link">Home</nuxt-link>
        <nuxt-link to="/store" class="link">Store</nuxt-link>
        <nuxt-link to="/blog" class="link">Blog</nuxt-link>
        <nuxt-link to="/contact" class="link">Contact</nuxt-link>
        <nuxt-link to="/cart" class="link">Cart</nuxt-link>
      </div>

      <img
        src="https://imagedelivery.net/ZfQ8_LKVeZ_L7rmMFmwmcQ/d671ff36-a00f-4229-38d2-ff5c93baa700/square"
        class="bigLogo md:block hidden"
        Logo2
      />
      <div>
        <p class="currency">(₵)GHS</p>
        <p class="location">🇬🇭</p>
      </div>
    </section>
    <!-- SMALL DISPLAY LINKS -->
    <img
      src="https://imagedelivery.net/ZfQ8_LKVeZ_L7rmMFmwmcQ/d671ff36-a00f-4229-38d2-ff5c93baa700/square"
      class="smallLogo md:hidden block"
      Logo2
    />
    <button class="menuBtn md:hidden" @click="showMenu = !showMenu">
      <menu-button></menu-button>
    </button>
    <section class="linksSectionMobile" v-show="showMenu">
      <div class="mobileLinks">
        <nuxt-link to="/" class="link">Home</nuxt-link>
        <nuxt-link to="/store" class="link">Store</nuxt-link>
        <nuxt-link to="/" class="link">Blog</nuxt-link>
        <nuxt-link to="/" class="link">Contact</nuxt-link>
      </div>
      <p class="logo hidden md:block">Logo</p>
      <div class="locationCurrency">
        <p class="currency">(₵)GHS</p>
        <p class="location">🇬🇭</p>
      </div>
      <p class="changeCurrency locationCurrency">Change Currency</p>
    </section>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      showMenu: false,
    };
  },
};
</script>

<style scoped>
nav {
  @apply w-full text-sm  md:bg-white md:h-auto shadow-md flex-col md:block justify-center items-center relative;
}
section {
  @apply flex justify-evenly p-3 text-center;
}
.arrivals {
  @apply md:text-base shadow-2xl bg-black text-white;
}
.arrivals p {
  @apply text-xs capitalize;
}
.discord {
  @apply text-sm;
}
.link {
  @apply border-b border-gray-500 px-2 pb-2 mb-2;
}
.link:active {
  @apply animate-ping duration-700 ease-in-out;
}
.linksSection {
  @apply mt-2  border-2 md:flex gap-x-1 px-10  hidden mx-auto justify-between items-center;
}
.linksSection div {
  @apply flex md:gap-x-3 gap-x-5;
}
.linksSectionMobile {
  @apply flex-col items-center justify-between md:hidden absolute w-full bg-gray-100 shadow-2xl;
}
.mobileLinks {
  @apply grid w-1/2;
}
.currency {
  @apply mt-0 md:mt-0 font-bold;
}
.signUpSection {
  @apply md:border-0 flex justify-evenly p-3 text-center items-center;
}
.smallLogo {
  @apply h-20 w-full object-contain bg-white py-2;
}
.bigLogo {
  @apply h-10 object-contain  mr-36;
}
.locationCurrency {
  @apply flex  w-1/4 items-center mt-3 justify-center bg-black text-black p-1 tracking-wide bg-opacity-30 md:block;
}
.menuBtn {
  @apply text-center w-auto mx-auto absolute bottom-6 left-5;
}
.changeCurrency {
  @apply text-xs w-1/2 bg-opacity-30 rounded-md tracking-tighter;
}
</style>
