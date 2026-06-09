import users from "./data.js";

const usernameInput = document.querySelector(".username");
const passwordInput = document.querySelector(".password");
const rememberMeCheckbox = document.querySelector("#remember-me");
const loginButton = document.querySelector(".login-button");

const login = (event) => {
  event.preventDefault();
  const username = usernameInput.value;
  const password = passwordInput.value;

  const user = users.find(
    (user) => user.username === username && user.password === password
  );

  if (user) {
    console.log("Successfully Logged In :))");

    if (rememberMeCheckbox.checked) {
      document.cookie = `userID=${user.id};path=/`;
    }
  } else {
    console.log("User not found !!");
  }
};

loginButton.addEventListener("click", login);
