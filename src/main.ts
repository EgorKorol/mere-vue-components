import Vue from "vue";
import App from "@/App.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUserSecret, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faUserSecret, faTimes);

Vue.component("FontAwesomeIcon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
