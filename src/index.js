import "./scss/styles.scss";
import login from "./pages/auth/login/login";
import registration from "./pages/auth/registration/registration";
import error404 from "./pages/error/error404/error404";
import error500 from "./pages/error/error500/error500";

const view = document.querySelector("#root");

window.addEventListener("hashchange", () => {
  let currentURL = location.hash;
  switch (currentURL) {
    case "#login":
      return (view.innerHTML = login);
    case "#registration":
      return (view.innerHTML = registration);
    case "#error404":
      return (view.innerHTML = error404);
    case "#error500":
      return (view.innerHTML = error500);
    default:
      return (view.innerHTML = error404);
  }
});
