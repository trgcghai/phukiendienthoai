const user = JSON.parse(localStorage.getItem("user") || "null");
const userLink = document.querySelectorAll(".user_link");
const userText = document.querySelectorAll(".user_text");
const cartLink = document.querySelectorAll(".cart_link");

if (user !== null) {
  userText.forEach((elem) => {
    elem.textContent = user.name.length >= 10 ? user.name.substring(0, 11) + "..." : user.name;
  });
  userLink.forEach((elem, index) => {
    elem.addEventListener("click", (e) => {
      e.preventDefault();
      window.location.href = "./pages/userPage.html";
    });
    if (index !== 0) {
      elem.textContent = user.name.length >= 10 ? user.name.substring(0, 11) + "..." : user.name;
    }
  });
} else {
  cartLink.forEach((elem) => {
    elem.addEventListener("click", (e) => {
      e.preventDefault();
      window.location.href = "./pages/login.html";
    });
  });
}
