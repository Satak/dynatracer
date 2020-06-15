var app = new Vue({
  el: "#app",
  data: {
    items: [],
    item: {
      name: null,
      description: null,
      level: 1,
    },
  },
  methods: {
    showMessage: function () {
      axios
        .get("/api/v1/misc/message")
        .then((response) => {
          console.log(response);
          alert(response.data.message);
        })
        .catch(function (error) {
          alert(error);
        });
    },
    showInfo: function () {
      axios
        .get("/api/v1/misc/info")
        .then((response) => {
          console.log(response);
          alert(response.data.message);
        })
        .catch(function (error) {
          alert(error);
        });
    },
    showHelp: function () {
      axios
        .get("/api/v1/misc/help")
        .then((response) => {
          console.log(response);
          alert(response.data.message);
        })
        .catch(function (error) {
          alert(error);
        });
    },
    itemLevel: function (level) {
      return {
        1: {
          name: "Low",
          className: "badge-primary",
        },
        2: {
          name: "Medium",
          className: "badge-warning",
        },
        3: {
          name: "High",
          className: "badge-danger",
        },
      }[level];
    },
    removeItem: function (itemId) {
      axios
        .delete(`/api/v1/items/${itemId}`)
        .then((response) => {
          this.items = this.items.filter((i) => i._id !== itemId);
        })
        .catch(function (error) {
          alert(error);
        });
    },
    addItem: function () {
      if (!this.item.name) return;
      axios
        .post(`/api/v1/items/`, this.item)
        .then((response) => {
          this.items.push(response.data.data);
          this.item.name = null;
          this.item.description = null;
          this.item.level = 1;
        })
        .catch(function (error) {
          alert(error);
        });
    },
  },
  mounted() {
    axios
      .get("/api/v1/items/")
      .then((response) => {
        this.items = response.data.data;
      })
      .catch(function (error) {
        alert(error);
      });
  },
});
