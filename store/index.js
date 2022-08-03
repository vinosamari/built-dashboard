export const state = () => ({
  country: "GH",
  showMenu: false,
  allProducts: [],
  currentProduct: {},
});

export const mutations = {
  ADD_ITEM: (state, item) => {
    state.allProducts.push(item);
  },
  SET_CURRENT_PRODUCT: (state, item) => {
    state.currentProduct = item;
  },
  CLOSE_MENU: (state) => {
    state.showMenu = false;
  },
  TOGGLE_MENU: (state) => {
    state.showMenu = !state.showMenu;
  },
  INIT_PRODUCTS_ARRAY: (state) => {
    state.allProducts = [];
  },
};

export const actions = {
  getUserLocation() {
    if (navigator.geolocation) {
      //check if geolocation is available
      navigator.geolocation.getCurrentPosition((position) => {
        const { longitude, latitude } = position.coords;
        $nuxt.$axios
          .get(
            "https://maps.googleapis.com/maps/api/geocode/json?latlng=" +
              latitude +
              "," +
              longitude +
              "&sensor=false&key=AIzaSyDGeaPZAOZYZSlQLpkl67gATCdlpO865BE"
          )
          .then((result) => {
            let resultData = result.data.plus_code.compound_code;
            if (resultData.includes("Ghana")) {
              console.log("AKWAABA");
            }
          });
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
    dbProducts.onSnapshot((querySnapshot) => {
      // INITIALIZE ARRAY BEFORE TAKING IN NEW ITEMS ON SNAPSHOT UPDATE
      ctx.commit("INIT_PRODUCTS_ARRAY");
      querySnapshot.forEach((doc) => {
        let changeObj = {
          id: doc.id,
          data: doc.data(),
        };
        ctx.commit("ADD_ITEM", changeObj);
      });
    });
  },
  closeMenu: (ctx) => {
    ctx.commit("CLOSE_MENU");
  },
  toggleMenu: (ctx) => {
    ctx.commit("TOGGLE_MENU");
  },
  setProduct: (ctx, item) => {
    ctx.commit("SET_CURRENT_PRODUCT", item);
  },
};
