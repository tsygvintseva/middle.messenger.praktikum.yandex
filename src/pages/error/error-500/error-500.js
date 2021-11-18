import Handlebars from "handlebars";
import errorTemplate from "./error-500.tmpl";
import "../error.scss";

const error500 = Handlebars.compile(errorTemplate);

const data = {
  errorCode: "500",
  errorDesc: "Мы уже фиксим",
  linkHref: "/#chats",
  linkText: "Назад к чатам",
};

export default error500(data);
