<template>
  <section>
    <div class="infoSection">
      <div class="totalRevenue">
        <h2 class="font-bold text-sm">Total Revenue</h2>
        <h3 class="font-bold text-xl tracking-tighter">
          $50.4k
          <span class="text-green-400 text-xs tracking-tighter ml-1">
            8% than last month ↑
          </span>
        </h3>
      </div>
      <div class="updateSection">
        <p>Data updates every 3 hours</p>
        <button>View All Orders</button>
      </div>
    </div>
    <div>
      <client-only>
        <bars
          class="chartsection"
          :data="[1, 2, 5, 9, 5, 10, 3, 5, 2, 5, 1, 8]"
          :labelData="[
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dev',
          ]"
          :labelRotate="-1"
          :labelSize="0.4"
          :rounding="2"
          :gradient="['#1e06ff']"
        >
        </bars>
      </client-only>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
section {
  @apply shadow-md rounded-xl p-5 m-4;
  min-width: 64%;
}
.totalRevenue {
  @apply tracking-tight capitalize;
}
.totalRevenue h2 {
  @apply text-xs;
}
.infoSection {
  @apply grid grid-cols-2;
}
.updateSection {
  @apply flex gap-3 items-center;
}
.updateSection p {
  @apply text-gray-400 text-xs tracking-tighter;
}
.updateSection button {
  @apply bg-gray-100 text-black font-semibold tracking-tight px-4 py-2 rounded-md shadow-sm text-xs transform hover:shadow-md transition-all duration-200;
}
</style>
