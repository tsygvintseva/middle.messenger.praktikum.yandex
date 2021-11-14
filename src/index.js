import "./scss/styles.scss";
import login from "./pages/login/login";
import registration from "./pages/registration/registration";

const view = document.querySelector("#root");

window.addEventListener("hashchange", () => {
  let currentURL = location.hash;
  switch (currentURL) {
    case "#login":
      return (view.innerHTML = login);
    case "#registration":
      return (view.innerHTML = registration);
  }
});
