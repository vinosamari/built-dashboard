<template>
  <section>
    <div class="headerSection">
      <h3>Most sold items</h3>
      <button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          height="1rem"
          class="fill-current dark:text-white text-black"
        >
          <path
            d="M120 256c0 30.9-25.1 56-56 56s-56-25.1-56-56s25.1-56 56-56s56 25.1 56 56zm160 0c0 30.9-25.1 56-56 56s-56-25.1-56-56s25.1-56 56-56s56 25.1 56 56zm104 56c-30.9 0-56-25.1-56-56s25.1-56 56-56s56 25.1 56 56s-25.1 56-56 56z"
          />
        </svg>
      </button>
    </div>
    <div class="doughnutSection">
      <full-doughnut-chart
        :initialValues="[120, 40, 50, 96]"
      ></full-doughnut-chart>
      <ul class="items">
        <li><span class="bg-blue-500 h-2 w-2 p-1 rounded-full"></span>Jeans</li>
        <li>
          <span class="bg-green-400 h-2 w-2 p-1 rounded-full"></span>Shirts
        </li>
        <li>
          <span class="bg-purple-500 h-2 w-2 p-1 rounded-full"></span>Bags
        </li>
        <li><span class="bg-red-400 h-2 w-2 p-1 rounded-full"></span>Others</li>
      </ul>
    </div>
  </section>
</template>

<script>
import FullDoughnutChart from "./Full-Doughnut-Chart.vue";
export default {
  components: { FullDoughnutChart },
};
</script>

<style scoped>
section {
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  @apply rounded-md shadow-md w-1/4 p-4;
}
.headerSection {
  @apply flex gap-1 items-center justify-between px-2 my-5 capitalize;
}
button {
  @apply px-2 rounded-md border py-1 shadow-inner transform transition-all duration-200 hover:shadow-md;
}
.doughnutSection {
  @apply text-center p-1 mx-auto;
}
ul {
  @apply flex flex-col gap-2 items-center justify-center rounded-md shadow text-xs my-2 p-2;
}
li {
  @apply inline-flex gap-1 items-center;
}
</style>
