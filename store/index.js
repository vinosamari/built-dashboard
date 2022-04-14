export const state = () => ({
  country: "GH",
});

export const actions = {
  getUserLocation() {
    if (navigator.geolocation) {
      //check if geolocation is available
      navigator.geolocation.getCurrentPosition(function (position) {
        console.log(position);
      });
    }
  },
};
