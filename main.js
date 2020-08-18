new Vue({
  el: "#app",
  data() {
    return {
      redirect: false,
    };
  },
  methods: {
    githubClicked() {
      document.getElementById("backdrop-id").style.display = "block";
      document.getElementById("popup-window-id").style.display = "block";
    },
    linkdinClicked() {
      window.location.href = "";
    },
    mediumClicked() {
      window.location.href = "https://medium.com/@ashumsd7";
    },
    quoraClicked() {
      window.location.href =
        "https://www.quora.com/profile/आशुतोष-आनन्द-तिवारी-Ashutosh-Anand-Tiwari";
    },
    twitterClicked() {
      window.location.href = "https://twitter.com/YourVueJS";
    },

    continueClicked() {
      this.redirect = true;
      if (this.redirect) {
        window.location.href = "https://github.com/ashumsd7";
      }
    },
    noClicked(){
        this.redirect = false;
        document.getElementById("backdrop-id").style.display = "none";
        document.getElementById("popup-window-id").style.display = "none";
    }
  },
});
