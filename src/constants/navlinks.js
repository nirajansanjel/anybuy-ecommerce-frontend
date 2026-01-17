import {
  ABOUT_ROUTE,
  CATEGORIES_ROUTE,
  HOME_ROUTE,
  POPULAR_ROUTE,
  PRODUCTS_ROUTE,
  TESTIMONIALS_ROUTE,
} from "./route";

const navLinks = [
  {
    route: HOME_ROUTE,
    label: "Home",
  },
  {
    route: ABOUT_ROUTE,
    label: "About",
  },
  {
    route: PRODUCTS_ROUTE,
    label: "Products",
  },
  {
    route: POPULAR_ROUTE,
    label: "Popular",
  },
  {
    route: CATEGORIES_ROUTE,
    label: "Categories",
  },
  {
    route: TESTIMONIALS_ROUTE,
    label: "Testimonials",
  },
];
export default navLinks;
