import FormValidator from '../../modules/form-validator';
import { Avatar } from '../../components/avatar/avatar';
import { InputProfile } from '../../components/input-profile/input-profile';
import { Button } from '../../components/button/button';

const validator = new FormValidator();

const EMAIL_PROPS = {
  label: 'Почта',
  type: 'email',
  name: 'email',
  value: 'pochta@yandex.ru',
  events: {
    focusin: (evt: FocusEvent) => validator.onInputFocus(evt.target),
    focusout: (evt: FocusEvent) => validator.onInputBlur(evt.target),
  },
}

const LOGIN_PROPS = {
  label: 'Логин',
  type: 'text',
  name: 'login',
  value: 'ivanivanov',
  events: {
    focusin: (evt: FocusEvent) => validator.onInputFocus(evt.target),
    focusout: (evt: FocusEvent) => validator.onInputBlur(evt.target),
  },
}

const NAME_PROPS = {
  label: 'Имя',
  type: 'text',
  name: 'first_name',
  value: 'Иван',
  events: {
    focusin: (evt: FocusEvent) => validator.onInputFocus(evt.target),
    focusout: (evt: FocusEvent) => validator.onInputBlur(evt.target),
  },
}

const LAST_NAME_PROPS = {
  label: 'Фамилия',
  type: 'text',
  name: 'second_name',
  value: 'Иванов',
  events: {
    focusin: (evt: FocusEvent) => validator.onInputFocus(evt.target),
    focusout: (evt: FocusEvent) => validator.onInputBlur(evt.target),
  },
}

const USERNAME_PROPS = {
  label: 'Имя в чате',
  type: 'text',
  name: 'display_name',
  value: 'Иван',
}

const PHONE_PROPS = {
  label: 'Телефон',
  type: 'tel',
  name: 'phone',
  value: '+7 (909) 967 30 30',
  events: {
    focusin: (evt: FocusEvent) => validator.onInputFocus(evt.target),
    focusout: (evt: FocusEvent) => validator.onInputBlur(evt.target),
  },
}

const BUTTON_PROPS = {
  text: 'Сохранить',
  type: 'submit',
  events: {
    click: (evt: MouseEvent) => validator.onSubmit(evt, evt.target),
  },
}

export const PROFILE_PROPS = {
  avatar: new Avatar(),
  name: 'Иван',
  email: new InputProfile(EMAIL_PROPS),
  login: new InputProfile(LOGIN_PROPS),
  firstName: new InputProfile(NAME_PROPS),
  lastName: new InputProfile(LAST_NAME_PROPS),
  username: new InputProfile(USERNAME_PROPS),
  phone: new InputProfile(PHONE_PROPS),
  button: new Button(BUTTON_PROPS),
}
