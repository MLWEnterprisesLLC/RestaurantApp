import LandingPic from "./pexels-chanwalrus-958545.jpg";

export function createRestaurantHomePage() {
  const LandingPage = document.getElementById("content");
  const pageContent = document.createElement("div");
  pageContent.classList.add("pageContent");
  const h1 = document.createElement("h1");
  const text = document.createTextNode("Indian Cusine");
  h1.appendChild(text);
  const h3 = document.createElement("h3");
  const text2 = document.createTextNode(
    "The Best Indian Food Outside Of India!"
  );
  h3.appendChild(text2);
  const img = document.createElement("img");
  img.src = LandingPic;
  img.style.height = "400px";
  img.style.width = "1175px";

  //console.log("Hello World!");*/
  pageContent.appendChild(h1);
  pageContent.appendChild(h3);
  pageContent.appendChild(img);
  LandingPage.appendChild(pageContent);
}
