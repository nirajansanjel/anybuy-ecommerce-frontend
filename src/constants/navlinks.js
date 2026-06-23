import {
  ABOUT_ROUTE,
  HOME_ROUTE,
  ORDERS_ROUTE,
  PRODUCTS_ROUTE,
  TESTIMONIALS_ROUTE,
} from "./route";

const navLinks = [
  {
    route: HOME_ROUTE,
    label: "Home",
  },
  {
    route: PRODUCTS_ROUTE,
    label: "Products",
  },
  {
    route: ORDERS_ROUTE,
    label: "Orders",
  },
  {
    route: TESTIMONIALS_ROUTE,
    label: "Testimonials",
  },
  {
    route: ABOUT_ROUTE,
    label: "About",
  },
];
export default navLinks;
