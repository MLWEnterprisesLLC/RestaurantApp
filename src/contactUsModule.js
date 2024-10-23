export const ContactUs = () => {
  const LandingPage = document.getElementById("content");
  const pageContent = document.createElement("div");
  pageContent.classList.add("pageContent");
  const form = document.createElement("form");
  const name = document.createElement("input");
  name.type = "text";
  name.placeholder = "First and Last Name";
  form.appendChild(name);
  const email = document.createElement("input");
  email.type = "email";
  email.placeholder = "Email";
  form.appendChild(email);
  const phonenum = document.createElement("input");
  phonenum.type = "text";
  phonenum.placeholder = "Phone Number";
  form.appendChild(phonenum);
  pageContent.appendChild(form);
  LandingPage.appendChild(pageContent);
};