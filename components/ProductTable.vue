<template>
  <div>
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-4">
      <div class="introDiv">
        <h2 class="font-bold tracking-wide text-xl dark:text-gray-200">
          Latest Orders
        </h2>
        <div class="updateDiv">
          <p>Data updates every 3 hours</p>
          <button>View All Orders</button>
        </div>
      </div>
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-200">
        <thead
          class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-600 dark:text-gray-200"
        >
          <tr>
            <th scope="col" class="w-10">Image</th>
            <th scope="col" class="px-6 py-3">Product</th>
            <th scope="col" class="px-6 py-3">Order ID</th>
            <th scope="col" class="px-6 py-3">Date</th>
            <th scope="col" class="px-6 py-3">Customer Name</th>
            <th scope="col" class="px-6 py-3">Status</th>
            <th scope="col" class="px-6 py-3">Amount</th>
            <th scope="col" class="px-6 py-3">Action</th>
          </tr>
        </thead>
        <tbody v-for="item in products" :key="item.orderID">
          <tr
            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
          >
            <td class="w-32 p-4">
              <img :src="item.imageUrl" :alt="item.productName" />
            </td>
            <td
              class="px-6 py-4 font-semibold text-gray-900 dark:text-white capitalize"
            >
              {{ item.productName }}
            </td>
            <td class="px-6 py-4 text-gray-900 dark:text-white">
              {{ item.orderID }}
            </td>
            <td class="px-6 py-4">
              <a href="#" class="font-medium hover:underline">{{
                item.date
              }}</a>
            </td>
            <td>
              <p>{{ item.customerName }}</p>
            </td>
            <td>
              <p class="capitalize">{{ item.status }}</p>
            </td>
            <td>
              <p class="font-semibold text-black dark:text-gray-200">
                {{ item.amount }}
              </p>
            </td>
            <td>
              <svg
                class="mx-auto"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                height="1rem"
                fill="black"
              >
                <path
                  d="M120 256c0 30.9-25.1 56-56 56s-56-25.1-56-56s25.1-56 56-56s56 25.1 56 56zm160 0c0 30.9-25.1 56-56 56s-56-25.1-56-56s25.1-56 56-56s56 25.1 56 56zm104 56c-30.9 0-56-25.1-56-56s25.1-56 56-56s56 25.1 56 56s-25.1 56-56 56z"
                />
              </svg>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [
        {
          imageUrl:
            "https://m.media-amazon.com/images/I/61by5VWswRL._AC_UY218_.jpg",
          productName: "iPhone 13 pro",
          orderID: this.generateProductId(),
          date: this.generateRandomDate(),
          status: this.generateRandomOrderState(),
          amount: this.generateRandomPrice(),
          customerName: this.generateRandomName(),
        },
        {
          imageUrl:
            "https://m.media-amazon.com/images/I/51lGR8Q-CCL._AC_UY218_.jpg",
          productName: "Macbook pro",
          orderID: this.generateProductId(),
          date: this.generateRandomDate(),
          status: this.generateRandomOrderState(),
          amount: this.generateRandomPrice(),
          customerName: this.generateRandomName(),
        },
        {
          imageUrl:
            "https://m.media-amazon.com/images/I/71S1qcZxEiL._AC_UY218_.jpg",
          productName: "Apple watch",
          orderID: this.generateProductId(),
          date: this.generateRandomDate(),
          status: this.generateRandomOrderState(),
          amount: this.generateRandomPrice(),
          customerName: this.generateRandomName(),
        },
        {
          imageUrl:
            "https://m.media-amazon.com/images/I/51jFAT5rxvL._AC_UY218_.jpg",
          productName: "Apple pencil",
          orderID: this.generateProductId(),
          date: this.generateRandomDate(),
          status: this.generateRandomOrderState(),
          amount: this.generateRandomPrice(),
          customerName: this.generateRandomName(),
        },
      ],
    };
  },
  methods: {
    generateProductId() {
      var id = "#";
      var possible = "0123456789";
      for (var i = 0; i < 7; i++) {
        id += possible.charAt(Math.floor(Math.random() * possible.length));
      }
      return id;
    },
    generateRandomDate() {
      const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];
      const month = months[Math.floor(Math.random() * months.length)];
      const day = Math.floor(Math.random() * 31) + 1;
      return `${month}, ${day} 2023`;
    },
    generateRandomPrice() {
      const dollarSign = "$";
      const wholeAmount = Math.floor(Math.random() * 10000);
      const decimalAmount = Math.floor(Math.random() * 100);
      const hasDecimal = Math.random() >= 0.5;
      return hasDecimal
        ? `${dollarSign}${wholeAmount}.${decimalAmount}`
        : `${dollarSign}${wholeAmount}`;
    },
    generateRandomName() {
      const firstNames = [
        "Kofi",
        "Ama",
        "Yaw",
        "Nana",
        "Efua",
        "Adwoa",
        "Kwame",
        "Akosua",
        "Esinam",
        "Nii",
      ];
      const lastNames = [
        "Adom",
        "Boakye",
        "Kwakye",
        "Owusu",
        "Sarpong",
        "Mensah",
        "Agyemang",
        "Darko",
        "Dumor",
        "Eshun",
      ];
      const firstName =
        firstNames[Math.floor(Math.random() * firstNames.length)];
      const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
      return `${firstName} ${lastName}`;
    },
    generateRandomOrderState() {
      const orderStates = ["pending", "cancelled", "delivered", "returned"];
      return orderStates[Math.floor(Math.random() * orderStates.length)];
    },
  },
};
</script>

<style scoped>
.introDiv {
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  @apply flex gap-3 justify-between items-center px-7;
}
.updateDiv {
  @apply flex gap-3 items-center text-xs;
}
.updateDiv p {
  @apply text-gray-500 dark:text-gray-200;
}
button {
  @apply bg-blue-600 px-8 py-2 rounded-lg shadow-md text-white mb-4 dark:bg-blue-800;
}
table {
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  @apply text-center;
}
img {
  @apply h-7 rounded-lg mx-auto;
}
</style>
