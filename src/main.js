import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// FontAwesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// FontAwesome Solid
import {
  faHouse,
  faCompass,
  faUser,
  faEllipsis,
  faMagnifyingGlass,
  faComment as faComments,
} from "@fortawesome/free-solid-svg-icons";

// FontAwesome Regular
import {
  faSquarePlus,
  faHeart,
  faPaperPlane,
  faBookmark,
  faComment,
} from "@fortawesome/free-regular-svg-icons";

// FontAwesome Brands
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

library.add(
  faComment,
  faComments,
  faHouse,
  faCompass,
  faUser,
  faSquarePlus,
  faHeart,
  faEllipsis,
  faPaperPlane,
  faBookmark,
  faMagnifyingGlass,
  faInstagram
);

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(router)
  .mount("#app");
