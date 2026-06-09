import users from "./data.js";

const usernameInput = document.querySelector(".username");
const passwordInput = document.querySelector(".password");
const rememberMeCheckbox = document.querySelector("#remember-me");
const loginButton = document.querySelector(".login-button");
const modal = document.querySelector(".modal-screen");
const modalText = document.querySelector(".modal-text")
const modalCard = document.querySelector(".modal-card");
const okButton = document.querySelector(".ok-button");

const login = (event) => {
  event.preventDefault();
  const username = usernameInput.value;
  const password = passwordInput.value;

  const user = users.find(
    (user) => user.username === username && user.password === password
  );

  if (user) {
    modal.classList.remove("hidden");
    modalText.innerHTML = "Login Successful"
    modalText.classList.remove("text-red-500")
    modalText.classList.add("text-green-500")

    if (rememberMeCheckbox.checked) {
      document.cookie = `userID=${user.id};path=/`;
    }
  } else {
    modal.classList.remove("hidden");
    modalText.innerHTML = "User Not Found"
    modalText.classList.remove("text-green-500")
    modalText.classList.add("text-red-500")


  }
};
okButton.addEventListener("click", () => {
  modal.classList.add("hidden");
});
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.add("hidden");
  }
});
loginButton.addEventListener("click", login);

