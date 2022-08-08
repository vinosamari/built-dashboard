<template>
  <main>
    <div v-if="this.status === 'failed'">
      <section class="successSection">
        <error-cross class="my-4"></error-cross>
        <h1 class="header capitalize">Oops! Something went wrong.</h1>
        <h2 class="subheader">
          Your order
          <small
            >(Transaction ID: {{ this.transaction_id }} | Transaction Ref:
            {{ this.transaction_ref }} )</small
          >
          was not completed. However, you haven't been charged and your items
          are still available in your cart.
        </h2>
      </section>
    </div>
    <div v-else-if="this.status === 'successful'">
      <section class="successSection">
        <double-check class="my-2"></double-check>
        <h1 class="header capitalize">Payment successful!</h1>
        <h2 class="subheader">
          Your order will be ready shortly. Please check your email for a
          payment receipt.
          <br />
          <small
            >Transaction ID: {{ this.transaction_id }} | Transaction Ref:
            {{ this.transaction_ref }}
          </small>
        </h2>
      </section>

      <!-- ORDER DETAILS SECTION -->
      <section
        class="orderDetailsSection text-center mx-auto md:mb-4 shadow-inner pt-4"
      >
        <h2
          class="text-center font-bold text-lg border-b mb-4 w-1/2 md:w-1/3 mx-auto rounded-md border-t shadow-inner"
        >
          You Paid: {{ this.savedOrderTotal }} Ghs
        </h2>
        <div
          v-for="(order, id) in this.savedOrders"
          :key="id"
          class="my-1 px-6 rounded-md shadow-lg mx-6 py-3 capitalize"
        >
          <h1 class="text-lg font-bold font-mono">
            {{ order.count }} x {{ order.name }}
          </h1>
          <h2 class="text-xs italic">{{ order.description }}</h2>
          <h3 class="font-bold font-mono">
            {{ order.price * order.count }} Ghs
          </h3>
        </div>
      </section>
    </div>
    <div v-else>
      Generating STATUS report...
      <h1>STATUS::=> {{ this.$route.query.status }}</h1>
      <h1>QUERY::=> {{ this.$route.query }}</h1>
      <h1>ROUTE::=> {{ this.$route }}</h1>
      <i>Please request the site developer to resolve this error.</i>
    </div>
    <div class="btnsDiv">
      <nuxt-link to="/"><home></home>Return to home</nuxt-link>
      <nuxt-link to="/menu"><menu-icon></menu-icon>Return to menu</nuxt-link>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      status: this.$route.query.status,
      transaction_ref: this.$route.query.tx_ref,
      transaction_id: this.$route.query.transaction_id,
      savedOrders: [],
      savedOrderTotal: 0,
    };
  },
  async mounted() {
    let status = this.$route.query.status;
    let savedCart = await this.$localForage.getItem("orders");
    let savedCartTotal = await this.$localForage.getItem("orderTotal");
    let customerName = await this.$localForage.getItem("customerName");
    let customerEmail = await this.$localForage.getItem("customerEmail");
    let customerPhone = await this.$localForage.getItem("customerPhone");
    let customerAddress = await this.$localForage.getItem("customerAddress");
    let requestedDelivery = await this.$localForage.getItem(
      "requestedDelivery"
    );
    this.savedOrders = savedCart;
    this.savedOrderTotal = savedCartTotal;
    // if (status === "failed") {
    //   console.log("transaction failed");
    // } else {
    //   let orderObject = {
    //     date: parseInt($nuxt.$moment().format("Do-MM-YYYY").toString()),
    //     order: savedCart,
    //     orderTotal: savedCartTotal,
    //     customerName,
    //     customerEmail,
    //     customerPhone,
    //     customerAddress,
    //     delivery: requestedDelivery,
    //     closed: false,
    //     closingStaff: null,
    //   };
    //   this.addOrderToDb(orderObject);
    // }
  },
  methods: {
    addOrderToDb: (order) => {
      let ordersDb = $nuxt.$fire.firestore.collection("orders");
      ordersDb.add(order).then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
      });
    },
    toastMsgSuccess: (msg, duration) => {
      return $nuxt.$toasted.success(msg, {
        theme: "bubble",
        position: "top-left",
        duration,
        theme: "bubble",
      });
    },
    toastMsgFail: (msg, duration) => {
      return $nuxt.$toasted.error(msg, {
        theme: "bubble",
        position: "top-left",
        duration,
        theme: "bubble",
      });
    },
  },
};
</script>

<style scoped>
main {
  @apply flex flex-col min-h-screen items-center;
}
.successSection {
  @apply flex flex-col items-center justify-center text-center px-3;
}
.header {
  @apply text-2xl;
}
.subheader {
  @apply text-center text-sm italic  px-2 my-4 mb-10 font-bold;
}
.btnsDiv {
  @apply md:grid md:grid-cols-2 flex flex-col items-center justify-center w-full justify-items-center;
}
a {
  @apply bg-black text-white flex justify-evenly items-center px-4 py-2 rounded-md shadow-lg w-1/2  my-3 capitalize;
}
</style>
