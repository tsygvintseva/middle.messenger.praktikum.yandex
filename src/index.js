import "./scss/styles.scss";
import login from "./pages/auth/login/login";
import registration from "./pages/auth/registration/registration";
import profile from "./pages/profile/profile";
import profileUpdate from "./pages/profile/profile-update/profile-update";
import error404 from "./pages/error/error-404/error-404";
import error500 from "./pages/error/error-500/error-500";

const view = document.querySelector("#root");
const startPage = document.querySelector("#start-page");

window.addEventListener("hashchange", () => {
  let currentURL = location.hash;
  switch (currentURL) {
    case "#login":
      return (view.innerHTML = login);
    case "#registration":
      return (view.innerHTML = registration);
    case "#profile":
      return (view.innerHTML = profile);
    case "#profileUpdate":
      return (view.innerHTML = profileUpdate);
    case "#error404":
      return (view.innerHTML = error404);
    case "#error500":
      return (view.innerHTML = error500);
    default:
      return (view.innerHTML = startPage.innerHTML);
  }
});

view.innerHTML = profile;
