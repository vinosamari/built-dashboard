<template>
  <nav>
    <div class="logo">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 400 512"
        fill="black"
        height="1.2rem"
      >
        <path
          d="M324 319.8h-13.2v34.7c-24.5 23.1-56.3 35.8-89.9 35.8-73.2 0-132.4-60.2-132.4-134.4 0-74.1 59.2-134.4 132.4-134.4 35.3 0 68.6 14 93.6 39.4l62.3-63.3C335 55.3 279.7 32 220.7 32 98 32 0 132.6 0 256c0 122.5 97 224 220.7 224 63.2 0 124.5-26.2 171-82.5-2-27.6-13.4-77.7-67.7-77.7zm-12.1-112.5H205.6v89H324c33.5 0 60.5 15.1 76 41.8v-30.6c0-65.2-40.4-100.2-88.1-100.2z"
        />
      </svg>
      <h2>Gogana</h2>
    </div>
    <div class="content">
      <h2 class="dashboard">Dashboard</h2>
      <!-- SEARCH BAR -->
      <div class="searchbar">
        <span
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            height="1.2rem"
            fill="#aaa9a9"
          >
            <path
              d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z"
            /></svg></span
        ><input type="text" placeholder="Search here" />
      </div>
      <!-- USER SECTION -->
      <div class="userSection">
        <div class="notifications">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            height="1.2rem"
          >
            <path
              d="M256 32V49.88C328.5 61.39 384 124.2 384 200V233.4C384 278.8 399.5 322.9 427.8 358.4L442.7 377C448.5 384.2 449.6 394.1 445.6 402.4C441.6 410.7 433.2 416 424 416H24C14.77 416 6.365 410.7 2.369 402.4C-1.628 394.1-.504 384.2 5.26 377L20.17 358.4C48.54 322.9 64 278.8 64 233.4V200C64 124.2 119.5 61.39 192 49.88V32C192 14.33 206.3 0 224 0C241.7 0 256 14.33 256 32V32zM216 96C158.6 96 112 142.6 112 200V233.4C112 281.3 98.12 328 72.31 368H375.7C349.9 328 336 281.3 336 233.4V200C336 142.6 289.4 96 232 96H216zM288 448C288 464.1 281.3 481.3 269.3 493.3C257.3 505.3 240.1 512 224 512C207 512 190.7 505.3 178.7 493.3C166.7 481.3 160 464.1 160 448H288z"
            />
          </svg>
          <div class="badge"></div>
        </div>
        <!-- USER PROFILE -->
        <div class="profile">
          <div class="texts">
            <h2>Aisha Lennox</h2>
            <h3>Operations Officer</h3>
          </div>
          <img
            src="https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="userimg"
          />
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
nav {
  @apply h-20 fixed top-0 w-full flex border-b border-gray-300 bg-white z-50;
}
.logo {
  @apply w-1/5 border-r border-gray-300 flex items-center gap-1;
}
.logo svg {
  @apply ml-8;
}
.logo h2 {
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  @apply font-black text-lg;
}
.content {
  @apply flex items-center w-full relative;
}
.dashboard {
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-weight: 600;
  @apply mx-5 mr-10 w-1/6 text-xl;
}
.searchbar {
  @apply flex bg-gray-50 items-center rounded-2xl shadow p-2 w-1/2 mx-8 px-10 text-sm;
}
input {
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  @apply bg-gray-50 ml-5 focus:outline-none w-3/4;
}
.userSection {
  @apply flex items-center gap-1 absolute right-4 text-xs;
}
.notifications {
  @apply rounded-full shadow p-3 mr-4  cursor-pointer hover:scale-125 transform transition-all duration-300 relative;
}
.badge {
  @apply bg-pink-600 rounded-full h-2 w-2 absolute top-3 right-3 bg-opacity-80;
}
.profile {
  @apply flex items-center gap-1;
}
.texts {
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-size: xx-small;
  @apply flex flex-col items-center justify-center tracking-tight;
}
.texts h2 {
  @apply font-bold text-xs;
}
.texts h3 {
  @apply text-gray-400;
}
img {
  @apply rounded-full h-12 w-12 object-cover shadow-sm border border-gray-400;
}
</style>
