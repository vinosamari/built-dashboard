export const state = () => ({
  country: "GH",
  showMenu: false,
  allProducts: [],
  currentProduct: {},
  cart: [],
  cartCount: 0,
  orderTotal: 0,
});

export const getters = {
  getCurrentProductImages: (state) => {
    let images = state.currentProduct.data.images;
    let itemsArr = [];
    images.forEach((image) => {
      let imageObj = {
        id: 0,
        src: image,
        thumbnail: image,
      };
      imageObj.id += 1;
      itemsArr.push(imageObj);
    });

    return itemsArr;
  },
  getCurrentProductPrice(state) {
    return state.currentProduct.data.price;
  },
};

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
  ADD_ITEM_TO_CART: (state, payload) => {
    let stateCart = state.cart;
    // ADD THE ITEM TO THE ORDERS ARRAY
    stateCart.push(payload);
    // INCREMENT CART COUNT
    state.cartCount += 1;
    // INCREMENT ORDER TOTAL
    // state.orderTotal += payload.price;
  },
  UPDATE_CART_ITEM_COUNT: (state, payload) => {
    let stateCart = state.cart;
    let itemToUpdate = stateCart.filter(
      (item) => item.name === payload.name
    )[0];
    itemToUpdate.count += 1;
    state.cartCount += 1;
    // INCREMENT ORDER TOTAL
    state.orderTotal += payload.price;
  },
  REMOVE_ITEM_FROM_CART: (state, payload) => {
    let stateCart = state.cart;
    let item = stateCart[stateCart.indexOf(payload)];
    state.orderTotal -= payload.price;
    if (item.count === 1) {
      stateCart.splice(stateCart.indexOf(payload), 1);
      toastMsg(`Removed ${item.name} from cart`, 500);
    } else {
      item.count -= 1;
      toastMsg(`${item.count} x ${item.name} left in your cart`, 800);
    }
    state.cartCount -= 1;
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
            }
          });
      });
    } else {
    }
  },
  getDbProducts: (ctx) => {
    let dbProducts = $nuxt.$fire.firestore.collection("products");
    // // LOOP THROUGH THE ARRAY AND FETCH THE DOC DATA AND STORE IN AN ARRAY
    dbProducts.onSnapshot((querySnapshot) => {
      ctx.commit("INIT_PRODUCTS_ARRAY");
      // INITIALIZE ARRAY BEFORE TAKING IN NEW ITEMS ON SNAPSHOT UPDATE
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
  addToCart: (ctx, item) => {
    ctx.commit("ADD_ITEM_TO_CART", item);
  },
  updateCart: (ctx, item) => {
    ctx.commit("UPDATE_CART_ITEM_COUNT", item);
  },
  removeFromCart: (ctx, item) => {
    ctx.commit("REMOVE_ITEM_FROM_CART", item);
  },
  cancelOrders: (ctx) => {
    ctx.commit("EMPTY_CART");
  },
  emptyCart: (ctx) => {
    ctx.commit("EMPTY_CART");
  },
};

function toastMsg(msg, duration) {
  return $nuxt.$toasted.success(msg, {
    theme: "bubble",
    position: "top-left",
    duration,
    theme: "bubble",
  });
}
