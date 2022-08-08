<template>
  <div>
    <table class="table-auto rounded-md">
      <thead>
        <tr class="bg-primary text-center bg-customYellow">
          <th
            class="w-1/4 md:min-w-[100px] text-xs md:text-lg md:font-semibold text-black py-4 lg:py-7 px-3 lg:px-4 border-l border-transparent"
          >
            No.
          </th>
          <th
            class="w-1/2 md:min-w-[160px] text-xs md:text-lg md:font-semibold text-black py-4 lg:py-7 px-3 lg:px-4 border-l border-transparent"
          >
            ITEM
          </th>
          <!-- <th
            class="w-1/6 md:min-w-[160px] text-xs md:text-lg md:font-semibold text-black py-4 lg:py-7 px-3 lg:px-4"
          >
            DESCRIPTION
          </th> -->
          <th
            class="w-1/4 md:min-w-[160px] text-xs md:text-lg md:font-semibold text-black py-4 lg:py-7 px-3 lg:px-4"
          >
            PRICE
          </th>
          <th
            v-show="!checkedOut"
            class="w-1/6 md:min-w-[160px] text-xs md:text-lg md:font-semibold text-black py-4 lg:py-7 px-1 lg:px-2"
          ></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="order in this.$store.state.cart" :key="order.id">
          <td
            class="text-center text-dark text-sm py-5 px-2 bg-white border border-black border-l capitalize"
          >
            {{ order.count }}
          </td>
          <td
            class="text-center text-dark text-xs py-5 px-2 bg-white border border-black border-l capitalize"
          >
            {{ order.data.name }}
          </td>

          <td
            class="text-center text-dark text-xs py-5 px-2 bg-white border border-black font-bold"
          >
            {{ order.data.price }}
          </td>
          <td
            v-show="!checkedOut"
            class="text-center text-dark text-xs py-5 px-2 bg-[#F3F6FF] border border-black"
          >
            <button class="removeOrder" @click="removeItem(order)">
              <trash></trash>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: ["checkedOut"],
  data() {
    return {};
  },
  methods: {
    removeItem(payload) {
      if (this.$store.state.cart.length === 0) window.location.reload();
      this.$store.dispatch("removeFromCart", payload);
    },
  },
};
</script>

<style scoped>
div {
  @apply mx-3;
}
</style>
