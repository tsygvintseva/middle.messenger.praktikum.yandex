import Handlebars from "handlebars";
import registrationTemplate from "./registration.tmpl";
import "./registration.scss";
import "../../components/input/input";
import "../../components/button/button";
import "../../components/link/link";

const registration = Handlebars.compile(registrationTemplate);

const data = {
  title: "Регистрация",
  input: [
    {
      label: "Почта",
      type: "email",
      name: "email",
      validationError: "Поле не заполнено",
    },
    {
      label: "Логин",
      type: "text",
      name: "login",
      validationError: "Поле не заполнено",
    },
    {
      label: "Имя",
      type: "text",
      name: "first_name",
      validationError: "Поле не заполнено",
    },
    {
      label: "Фамилия",
      type: "text",
      name: "second_name",
      validationError: "Поле не заполнено",
    },
    {
      label: "Телефон",
      type: "tel",
      name: "phone",
      validationError: "Поле не заполнено",
    },
    {
      label: "Пароль",
      type: "password",
      name: "password",
      validationError: "Поле не заполнено",
    },
    {
      label: "Пароль (ещё раз)",
      type: "password",
      name: "passwordRepeat",
      validationError: "Пароли не совпадают",
    },
  ],
  buttonText: "Зарегистрироваться",
  linkHref: "/#login",
  linkText: "Войти",
};

export default registration(data);
