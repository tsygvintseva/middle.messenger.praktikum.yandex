import Handlebars from "handlebars";
import errorTemplate from "./error404.tmpl";
import "../error.scss";

const error404 = Handlebars.compile(errorTemplate);

const data = {
  errorCode: "404",
  errorDesc: "Не туда попали",
  linkHref: "/#chats",
  linkText: "Назад к чатам",
};

export default error404(data);
