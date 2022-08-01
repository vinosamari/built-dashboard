<template>
  <main>
    <img
      class="image"
      src="https://imagedelivery.net/ZfQ8_LKVeZ_L7rmMFmwmcQ/d671ff36-a00f-4229-38d2-ff5c93baa700/public"
      alt="game-logo"
    />
    <section class="formSection">
      <div class="comingSoonSection px-5">
<<<<<<< HEAD
        <!-- <h1 class="header text-center mb-3">Loading...</h1> -->
=======
>>>>>>> staging
        <h2>Leave us your details to notify you when we go live!</h2>
      </div>
      <form class="mainForm" @submit.prevent="submitForm">
        <div class="formDiv">
          <label for="name">Player Name: </label>
          <input type="text" placeholder="Enter Your Name..." v-model="name" />
        </div>
        <div class="formDiv">
          <label for="email">Player Email: </label>
          <input
            type="email"
            placeholder="Enter Your Email..."
            v-model="email"
          />
        </div>
        <div class="formDiv">
          <label class="text-xs w-1/4" for="refCode "
            >Referral Code (Optional):
          </label>
          <input
            type="text"
            placeholder="Referral Code Goes Here..."
            class="w-1/2 text-xs"
          />
        </div>
        <button type="submit" class="notifyMe" @click.prevent="submitForm">
          Notify Me
        </button>
        <div class="referralDiv">
          <p class="text-xs text-center">
            Generate a referral code to invite your friends and win merch
          </p>
          <button class="text-xs" @click.prevent="generateRef">
            Generate Referral Code
          </button>
          <p id="refCode" v-show="refCode">G7BHEG7D</p>
        </div>
      </form>
    </section>
  </main>
</template>

<script>
import emailjs from "@emailjs/browser";
export default {
  data() {
    return {
      name: "",
      email: "",
      refCode: false,
      name: "",
      email: "",
    };
  },
  methods: {
<<<<<<< HEAD
    async submitForm() {
      let templateParams = {
        name: this.name,
        email: this.email,
      };
      this.sendEmail(templateParams);
=======
    submitForm() {
      let params = {
        name: this.name,
        email: this.email,
      };
      this.sendEmail(params);
      this.name = "";
      this.email = "";
>>>>>>> staging
    },
    generateRef() {
      this.refCode = true;
    },
<<<<<<< HEAD
    sendEmail(templateParams) {
=======
    sendEmail(template_params) {
>>>>>>> staging
      emailjs
        .send(
          "service_gameltdonline",
          "template_y9g27in",
<<<<<<< HEAD
          templateParams,
=======
          template_params,
>>>>>>> staging
          "IRA9Aa5W4m-8n5q_Q"
        )
        .then(
          (result) => {
<<<<<<< HEAD
            this.name = "";
            this.email = "";
=======
>>>>>>> staging
            console.log("SUCCESS!", result.text);
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    },
  },
};
</script>

<style scoped>
main {
  @apply min-h-screen flex flex-col items-center font-customTwo;
}
.header {
  @apply font-customTwo text-2xl animate-pulse;
}
.comingSoonSection {
  @apply text-center px-4;
}
form {
  @apply flex flex-col border border-gray-200 rounded-lg shadow-2xl px-5 py-3;
}
form div {
  @apply flex items-center text-left my-3;
}
label {
  @apply font-bold;
}
input {
  @apply border-2 border-black rounded-md shadow-2xl ml-5 p-1 w-3/4;
}
img {
  @apply h-32 my-2;
}
.referralDiv {
  @apply flex-col my-4 border border-gray-300 py-4 px-5 rounded-md;
}
button {
  @apply bg-black px-4 py-2 rounded-md shadow-2xl tracking-wider text-white mt-3;
}
.notifyMe {
  @apply w-auto mb-10;
}
#refCode {
  @apply my-3;
}
</style>
