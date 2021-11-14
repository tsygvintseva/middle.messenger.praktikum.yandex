import Handlebars from "handlebars";
import profileUpdateTemplate from "./profile-update.tmpl";
import "../../../components/avatar/avatar";
import "../../../components/input-profile/input-profile";
import "../../../components/link/link";
import "../../../components/button/button";

const profileUpdate = Handlebars.compile(profileUpdateTemplate);

const data = {
  avatar: false,
  avatarModal: false,
  avatarFileName: "pic.jpg",
  avatarUpload: false,
  avatarUploadError: false,
  avatarValidationError: false,
  inputProfile: [
    {
      label: "Почта",
      type: "email",
      name: "email",
      value: "pochta@yandex.ru",
      disabled: false,
    },
    {
      label: "Логин",
      type: "text",
      name: "login",
      value: "ivanivanov",
      disabled: false,
    },
    {
      label: "Имя",
      type: "text",
      name: "first_name",
      value: "Иван",
      disabled: false,
    },
    {
      label: "Фамилия",
      type: "text",
      name: "second_name",
      value: "Иванов",
      disabled: false,
    },
    {
      label: "Имя в чате",
      type: "text",
      name: "display_name",
      value: "Иван",
      disabled: false,
    },
    {
      label: "Телефон",
      type: "tel",
      name: "phone",
      value: "+7 (909) 967 30 30",
      disabled: false,
    },
  ],
  buttonText: "Сохранить",
};

export default profileUpdate(data);
