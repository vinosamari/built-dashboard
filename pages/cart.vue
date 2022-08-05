<template>
  <main>YOUR CART IS EMPTY</main>
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
      // cartCount: this.$store.state.cartCount,
      // orderTotal: this.$store.state.orderTotal,
      // orders: this.$store.state.cart,
      delivery: false,
    };
  },
  methods: {
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
  @apply min-h-screen;
}
</style>
