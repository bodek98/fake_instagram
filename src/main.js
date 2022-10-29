import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// FontAwesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// FontAwesome Solid
import {
  faComment,
  faHouse,
  faCompass,
  faUser,
  faEllipsis,
} from "@fortawesome/free-solid-svg-icons";

// FontAwesome Regular
import {
  faSquarePlus,
  faHeart,
  faPaperPlane,
  faBookmark,
} from "@fortawesome/free-regular-svg-icons";

library.add(
  faComment,
  faHouse,
  faCompass,
  faUser,
  faSquarePlus,
  faHeart,
  faEllipsis,
  faPaperPlane,
  faBookmark
);

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(router)
  .mount("#app");
