import FormValidator from '../../../modules/form-validator';
import { Avatar } from '../../../components/avatar/avatar';
import { Button } from '../../../components/button/button';
import { InputProfile } from '../../../components/input-profile/input-profile';

const validator = new FormValidator();

const OLD_PASSWORD_PROPS = {
  label: 'Старый пароль',
  type: 'password',
  name: 'oldPassword',
  value: '123',
}

const PASSWORD_PROPS = {
  label: 'Новый пароль',
  type: 'password',
  name: 'password',
  value: '123',
  events: {
    focusin: (evt: FocusEvent) => validator.onInputFocus(evt.target),
    focusout: (evt: FocusEvent) => validator.onInputBlur(evt.target),
  },
}

const CONFIRM_PASSWORD_PROPS = {
  label: 'Повторите новый пароль',
  type: 'password',
  name: 'confirmPassword',
  value: '123',
}

const BUTTON_PROPS = {
  text: 'Сохранить',
  type: 'submit',
  events: {
    click: (evt: MouseEvent) => validator.onSubmit(evt, evt.target),
  },
}

export const PROFILE_PASSWORD_DATA = {
  avatar: new Avatar(),
  button: new Button(BUTTON_PROPS),
  oldPassword: new InputProfile(OLD_PASSWORD_PROPS),
  password: new InputProfile(PASSWORD_PROPS),
  confirmPassword: new InputProfile(CONFIRM_PASSWORD_PROPS)
}
