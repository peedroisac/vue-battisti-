const MyNameApp = {
    data() {
        return {
            name: "Pedro",
            lastname: "Patricio"
        }
    }
}

Vue.createApp(MyNameApp).mount("#app");