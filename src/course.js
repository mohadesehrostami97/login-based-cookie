import users from "./data.js";

window.addEventListener("load", () => {
  const cookies = document.cookie.split("= ");

  let mainCookie = null;

  cookies.some((cookie) => {
    if (cookie.includes("userID")) {
      mainCookie = cookie.slice(cookie.indexOf("=") + 1);
      return true;
    }
  });

  if (mainCookie) {
    const user = users.find((user) => user.id === +mainCookie);
    const userInfoInDom = document.querySelector("h3");

    userInfoInDom.innerHTML = `Username = ${user.username}`;
  } else {
    userInfoInDom.innerHTML = "User Not Found";
  }
});
