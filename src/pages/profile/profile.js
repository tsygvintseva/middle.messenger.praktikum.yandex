import Handlebars from "handlebars";
import profileTemplate from "./profile.tmpl";
import "./profile.scss";
import "../../components/avatar/avatar";
import "../../components/input-profile/input-profile";
import "../../components/link/link";
import "../../components/button/button";

const profile = Handlebars.compile(profileTemplate);

const data = {
  avatarFileName: "pic.jpg",
  name: "Иван",
  inputProfile: [
    {
      label: "Почта",
      type: "email",
      name: "email",
      value: "pochta@yandex.ru",
      disabled: true,
    },
    {
      label: "Логин",
      type: "text",
      name: "login",
      value: "ivanivanov",
      disabled: true,
    },
    {
      label: "Имя",
      type: "text",
      name: "first_name",
      value: "Иван",
      disabled: true,
    },
    {
      label: "Фамилия",
      type: "text",
      name: "second_name",
      value: "Иванов",
      disabled: true,
    },
    {
      label: "Имя в чате",
      type: "text",
      name: "display_name",
      value: "Иван",
      disabled: true,
    },
    {
      label: "Телефон",
      type: "tel",
      name: "phone",
      value: "+7 (909) 967 30 30",
      disabled: true,
    },
  ],
  profileNotChange: true,
  linkText: "Изменить пароль",
  buttonText: "Сохранить",
};

export default profile(data);
