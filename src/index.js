import "./scss/styles.scss";
import login from "./pages/login/login";

const view = document.querySelector("#root");

window.addEventListener("hashchange", () => {
  let currentURL = location.hash;
  switch (currentURL) {
    case "#login":
      return (view.innerHTML = login);
  }
});
