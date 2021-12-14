import FormValidator from '../../../modules/form-validator';
import { Input } from '../../../components/input/input';
import { Button } from '../../../components/button/button';

const validator = new FormValidator();

const EMAIL_PROPS = {
  label: 'Почта',
  type: 'email',
  name: 'email',
  required: true,
  events: {
    focusin: (evt: FocusEvent) => validator.onInputFocus(evt.target),
    focusout: (evt: FocusEvent) => validator.onInputBlur(evt.target),
  },
}

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

const NAME_PROPS = {
  label: 'Имя',
  type: 'text',
  name: 'first_name',
  required: true,
  events: {
    focusin: (evt: FocusEvent) => validator.onInputFocus(evt.target),
    focusout: (evt: FocusEvent) => validator.onInputBlur(evt.target),
  },
}

const LAST_NAME_PROPS = {
  label: 'Фамилия',
  type: 'text',
  name: 'second_name',
  required: true,
  events: {
    focusin: (evt: FocusEvent) => validator.onInputFocus(evt.target),
    focusout: (evt: FocusEvent) => validator.onInputBlur(evt.target),
  },
}

const PHONE_PROPS = {
  label: 'Телефон',
  type: 'tel',
  name: 'phone',
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

const PASSWORD_REPEAT_PROPS = {
  label: 'Пароль (ещё раз)',
  type: 'passwordRepeat',
  name: 'passwordRepeat',
  required: true,
}

const BUTTON_PROPS = {
  text: 'Зарегистрироваться',
  type: 'submit',
  events: {
    click: (evt: MouseEvent) => validator.onSubmit(evt, evt.target),
  },
}

export const REGISTRATION_FORM_PROPS = {
  title: 'Регистрация',
  email: new Input(EMAIL_PROPS),
  login: new Input(LOGIN_PROPS),
  firstName: new Input(NAME_PROPS),
  lastName: new Input(LAST_NAME_PROPS),
  phone: new Input(PHONE_PROPS),
  password: new Input(PASSWORD_PROPS),
  passwordRepeat: new Input(PASSWORD_REPEAT_PROPS),
  button: new Button(BUTTON_PROPS)
}
