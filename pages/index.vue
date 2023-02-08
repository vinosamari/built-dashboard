<template>
  <main>
    <div class="dashStats">
      <dash-quick-stats
        v-for="item in quickStats"
        :key="item.title"
        :amount="item.amount"
        :stat="item.stat"
        :title="item.title"
        :message="item.message"
        :color="item.color"
      ></dash-quick-stats>
    </div>
    <div class="detailsSection">
      <hero-stats></hero-stats>
      <most-sold></most-sold>
    </div>
    <product-table class="my-5"></product-table>
  </main>
</template>

<script>
import DashQuickStats from "~/components/DashQuickStats.vue";
import HeroStats from "~/components/HeroStats.vue";
export default {
  components: { DashQuickStats, HeroStats },
  name: "IndexPage",
  data() {
    return {
      quickStats: [
        {
          title: "Today's sales",
          stat: "$20.4k",
          message: "We have sold 123 items",
          amount: "15",
          color: "blue",
        },
        {
          title: "Today's Revenue",
          stat: "$8.2k",
          message: "Available to payout",
          amount: "80",
          color: "green",
        },
        {
          title: "In escrow",
          stat: "$18.2k",
          message: "Available to payout",
          amount: "60",
          color: "orange",
        },
      ],
    };
  },
};
</script>

<style scoped>
main {
  @apply min-h-screen flex-col flex p-10 md:pl-56 pt-20;
}
.dashStats {
  @apply grid grid-cols-3;
}
.detailsSection {
  @apply flex gap-5 items-center;
}
</style>
