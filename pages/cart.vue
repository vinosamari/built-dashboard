<template>
  <main>
    <div v-if="this.$store.state.cart.length === 0">your cart is empty</div>
    <div v-else>
      <order-table :checkedOut="checkedOut"></order-table>
      <div class="checkoutSection">
        <div class="buttons">
          <button @click="goToStore" v-show="!checkedOut">
            Continue shopping
          </button>
          <button @click="proceedToCheckout">Proceed to checkout</button>
          <div class="customerDetailsSection"></div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      customerName: "",
      customerEmail: "",
      customerPhone: "",
      customerAddress: "",
      checkedOut: false,
      delivery: false,
    };
  },
  methods: {
    proceedToCheckout() {
      this.checkedOut = true;
    },
    goToStore() {
      this.$router.push("/store");
    },
    generateReference() {
      let date = new Date();
      return date.getTime().toString();
    },
    closedPaymentModal() {
      this.$router.push("/cart");
    },
    makePaymentCallback() {
      // this.$store.dispatch("emptyCart");
      // EMPTY CART LOGIC
      this.$router.push("/success");
    },
  },
  computed: {
    paymentData() {
      return {
        tx_ref: this.generateReference(),
        amount: this.$store.state.orderTotal,
        currency: "GHS",
        payment_options: "mobilemoneyghana",
        redirect_url: "https://lumenbarandgrill.vercel.app/transaction",
        customer: {
          name: this.customerName,
          email: this.customerEmail,
          phone_number: this.customerPhone,
        },
        customizations: {
          title: "Lumen Bar & Grill",
          description: "Online order payment",
          logo: "https://gameofficial.vercel.app/_nuxt/img/logo.66ceb6d.png",
        },
        callback: this.makePaymentCallback,
        onclose: this.closedPaymentModal,
      };
    },
  },
};
</script>

<style scoped>
main {
  @apply min-h-screen font-customOne;
}
.buttons {
  @apply flex flex-col items-center justify-center;
}
.buttons button {
  @apply bg-black font-bold uppercase tracking-wide text-sm px-3 py-1 rounded-md my-3 text-white;
}
</style>
