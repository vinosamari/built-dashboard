<template>
  <main>
    <div v-if="this.$store.state.cart.length === 0" class="empty">
      your cart is empty
      <button @click="goToStore" v-show="!checkedOut">Go to the store</button>
    </div>
    <div v-else>
      <order-table :checkedOut="checkedOut"></order-table>
      <div class="checkoutSection">
        <div class="buttons">
          <button @click="goToStore" v-show="!checkedOut">
            Continue shopping
          </button>
          <button @click="proceedToCheckout" :disabled="checkedOut">
            Proceed to checkout
          </button>
          <div class="customerDetailsSection">
            <form v-show="checkedOut">
              <div>
                <label for="name">Full Name</label> <input type="text" />
              </div>
              <div>
                <label for="email">Email Address</label> <input type="email" />
              </div>
              <div>
                <label for="phone">Phone No.</label> <input type="tel" />
              </div>
              <div>
                <label for="address">Shipping Address</label>
                <textarea
                  name="address"
                  id="address"
                  cols="30"
                  rows="10"
                ></textarea>
              </div>
              <button>Pay ₵{{ this.$store.state.orderTotal }}</button>
            </form>
          </div>
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
button:disabled {
  @apply bg-gray-300 text-gray-500;
}
form div {
  @apply flex flex-col justify-center items-center;
}
form button {
  @apply w-full mx-auto text-xl;
}
.empty {
  @apply text-center my-3 uppercase tracking-wider flex flex-col items-center justify-center;
}
.empty button {
  @apply bg-black font-bold uppercase tracking-wide text-sm px-3 py-1 rounded-md my-3 text-white;
}
</style>
