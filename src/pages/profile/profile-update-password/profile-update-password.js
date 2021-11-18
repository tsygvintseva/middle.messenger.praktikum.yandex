import Handlebars from "handlebars";
import profileUpdatePasswordTemplate from "./profile-update-password.tmpl";
import "../profile.scss";
import "../../../components/avatar/avatar";
import "../../../components/input-profile/input-profile";
import "../../../components/button/button";

const profileUpdatePassword = Handlebars.compile(profileUpdatePasswordTemplate);

const data = {
  avatar: false,
  avatarModal: false,
  avatarFileName: "pic.jpg",
  avatarUpload: false,
  avatarUploadError: false,
  avatarValidationError: false,
  inputProfile: [
    {
      label: "Старый пароль",
      type: "password",
      name: "oldPassword",
      value: "123",
      disabled: false,
    },
    {
      label: "Новый пароль",
      type: "password",
      name: "newPassword",
      value: "123",
      disabled: false,
    },
    {
      label: "Повторите новый пароль",
      type: "password",
      name: "returnNewPassword",
      value: "123",
      disabled: false,
    },
  ],
  buttonText: "Сохранить",
};

export default profileUpdatePassword(data);
