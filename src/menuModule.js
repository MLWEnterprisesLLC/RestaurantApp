export const menu = () => {
  const LandingPage = document.getElementById("content");
  const pageContent = document.createElement("div");
  pageContent.classList.add("pageContent");
  const ul = document.createElement("ul");
  const li1 = document.createElement("li");
  const text1 = document.createTextNode("Aloo Rotl");
  li1.appendChild(text1);
  ul.appendChild(li1);
  const li2 = document.createElement("li");
  const text2 = document.createTextNode("Aloo Gobl");
  li2.appendChild(text2);
  ul.appendChild(li2);
  const li3 = document.createElement("li");
  const text3 = document.createTextNode("Saag Paneer");
  li3.appendChild(text3);
  ul.appendChild(li3);

  //console.log("Hello World!");*/
  pageContent.appendChild(ul);

  LandingPage.appendChild(pageContent);
};
