import FormValidator from '../../../modules/form-validator';
import { Input } from '../../../components/input/input';
import { Button } from '../../../components/button/button';

const validator = new FormValidator();

const LOGIN_PROPS = {
  label: 'Логин',
  type: 'text',
  name: 'login',
  required: true,
  events: {
    focusin: (evt: FocusEvent) => validator.onInputFocus(evt.target),
    focusout: (evt: FocusEvent) => validator.onInputBlur(evt.target),
  },
}

const PASSWORD_PROPS = {
  label: 'Пароль',
  type: 'password',
  name: 'password',
  required: true,
  events: {
    focusin: (evt: FocusEvent) => validator.onInputFocus(evt.target),
    focusout: (evt: FocusEvent) => validator.onInputBlur(evt.target),
  },
}

const BUTTON_PROPS = {
  text: 'Войти',
  type: 'submit',
  events: {
    click: (evt: MouseEvent) => validator.onSubmit(evt, evt.target),
  },
}

export const LOGIN_FORM_PROPS = {
  title: 'Вход',
  login: new Input(LOGIN_PROPS),
  password: new Input(PASSWORD_PROPS),
  button: new Button(BUTTON_PROPS)
}
