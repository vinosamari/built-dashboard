<template>
  <section>
    <div class="statDetails">
      <h2 class="title">{{ title }}</h2>
      <h3 class="stat">{{ stat }}</h3>
      <h4 class="info">{{ message }}</h4>
    </div>
    <div class="percentDoughnut">
      <doughnut-chart
        :initialValues="subtractFrom100(parseInt(amount))"
        :color="color"
      ></doughnut-chart>
    </div>
  </section>
</template>

<script>
export default {
  props: ["title", "stat", "message", "amount", "color"],
  methods: {
    subtractFrom100(num) {
      return [num, 100 - num];
    },
  },
};
</script>

<style scoped>
section {
  @apply shadow-md rounded-xl border-b p-5 my-5 mx-3 grid grid-cols-2 cursor-pointer hover:scale-105 transform transition-all duration-500;
}
.statDetails {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  @apply flex flex-col gap-1 capitalize;
}

.title {
  @apply text-sm;
}

.stat {
  @apply font-black text-xl;
}

.info {
  @apply text-xs text-gray-400;
}
.percentDoughnut {
  @apply mx-auto;
}
</style>
