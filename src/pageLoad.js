import { createRestaurantHomePage } from "./createRestaurantHomePage";
import { createTabs } from "./createTabs";

export function initPageLoad() {
  createTabs();
  createRestaurantHomePage();
}
