import { ContactUs } from "./ContactUsModule";
import { createRestaurantHomePage } from "./createRestaurantHomePage";
import { menu } from "./menuModule";
import "./styles.css";
export const createTabs = () => {
  const content = document.getElementById("content");
  const d1 = document.createElement("div");
  const d2 = document.createElement("div");
  const d3 = document.createElement("div");

  d1.setAttribute("id", "home-btn");
  d2.setAttribute("id", "contact-btn");
  d3.setAttribute("id", "menu-btn");

  d1.classList.add("tab");
  d2.classList.add("tab");
  d3.classList.add("tab");

  d1.textContent = "Home";
  d2.textContent = "Contact";
  d3.textContent = "Menu";

  content.appendChild(d1);
  content.appendChild(d2);
  content.appendChild(d3);

  d1.addEventListener("click", () => {
    clearPageContent();
    createRestaurantHomePage();
  });
  d2.addEventListener("click", () => {
    clearPageContent();
    ContactUs();
  });

  d3.addEventListener("click", () => {
    clearPageContent();
    menu();
  });

  const clearPageContent = () => {
    const content = document.querySelector("#content");
    const pageContent = document.querySelector(".pageContent");
    if (pageContent) {
      content.removeChild(pageContent);
    }
  };
};
