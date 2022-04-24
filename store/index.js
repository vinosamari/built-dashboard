export const state = () => ({
  country: "GH",
  navbaOpen: false,
  allProducts: [],
});

export const mutations = {
  ADD_ITEM: (state, item) => {
    state.allProducts.push(item);
  },
};

export const actions = {
  getUserLocation() {
    if (navigator.geolocation) {
      //check if geolocation is available
      navigator.geolocation.getCurrentPosition((position) => {
        // const { longitude, latitude } = position.coords;
        // $nuxt.$axios
        //   .get(
        //     "https://maps.googleapis.com/maps/api/geocode/json?latlng=" +
        //       latitude +
        //       "," +
        //       longitude +
        //       "&sensor=false"
        //   )
        //   .then((result) => {
        //     console.log(result);
        //   });
        // console.log(longitude);
        // console.log(latitude);
        // console.log(position);
      });
    } else {
      console.log("Nothing Happened!");
    }
  },
  getDbProducts: (ctx) => {
    let dbProducts = $nuxt.$fire.firestore.collection("products");
    // // LOOP THROUGH THE ARRAY AND FETCH THE DOC DATA AND STORE IN AN ARRAY
    dbProducts.get().then((results) => {
      results.forEach((result) => {
        ctx.commit("ADD_ITEM", result.data());
      });
    });
  },
};
