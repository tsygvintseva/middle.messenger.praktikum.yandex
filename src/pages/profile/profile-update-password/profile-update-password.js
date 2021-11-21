import Handlebars from "handlebars";
import profileUpdatePasswordTemplate from "./profile-update-password.tmpl";
import "../profile.scss";
import "../../../components/avatar/avatar";
import "../../../components/input-profile/input-profile";
import "../../../components/button/button";

const profileUpdatePassword = Handlebars.compile(profileUpdatePasswordTemplate);

const data = {
  avatarFileName: "pic.jpg",
  inputProfile: [
    {
      label: "Старый пароль",
      type: "password",
      name: "oldPassword",
      value: "123",
    },
    {
      label: "Новый пароль",
      type: "password",
      name: "newPassword",
      value: "123",
    },
    {
      label: "Повторите новый пароль",
      type: "password",
      name: "returnNewPassword",
      value: "123",
    },
  ],
  buttonText: "Сохранить",
};

export default profileUpdatePassword(data);
