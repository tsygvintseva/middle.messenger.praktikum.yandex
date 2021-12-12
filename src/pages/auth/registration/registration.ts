import Block from '../../../modules/block';
import registrationTmpl from './registration.tmpl';
import FormValidator from '../../../modules/form-validator';
import { Input } from '../../../components/input/input';
import { Button } from '../../../components/button/button';
import '../auth.scss';

const validator = new FormValidator();

const EMAIL = {
  label: 'Почта',
  type: 'email',
  name: 'email',
  required: true,
  events: {
    focusin: (evt: FocusEvent) => validator.onInputFocus(evt.target),
    focusout: (evt: FocusEvent) => validator.onInputBlur(evt.target),
  },
}

const LOGIN = {
  label: 'Логин',
  type: 'text',
  name: 'login',
  required: true,
  events: {
    focusin: (evt: FocusEvent) => validator.onInputFocus(evt.target),
    focusout: (evt: FocusEvent) => validator.onInputBlur(evt.target),
  },
}

const NAME = {
  label: 'Имя',
  type: 'text',
  name: 'first_name',
  required: true,
  events: {
    focusin: (evt: FocusEvent) => validator.onInputFocus(evt.target),
    focusout: (evt: FocusEvent) => validator.onInputBlur(evt.target),
  },
}

const LAST_NAME = {
  label: 'Фамилия',
  type: 'text',
  name: 'second_name',
  required: true,
  events: {
    focusin: (evt: FocusEvent) => validator.onInputFocus(evt.target),
    focusout: (evt: FocusEvent) => validator.onInputBlur(evt.target),
  },
}

const PHONE = {
  label: 'Телефон',
  type: 'tel',
  name: 'phone',
  required: true,
  events: {
    focusin: (evt: FocusEvent) => validator.onInputFocus(evt.target),
    focusout: (evt: FocusEvent) => validator.onInputBlur(evt.target),
  },
}

const PASSWORD = {
  label: 'Пароль',
  type: 'password',
  name: 'password',
  required: true,
  events: {
    focusin: (evt: FocusEvent) => validator.onInputFocus(evt.target),
    focusout: (evt: FocusEvent) => validator.onInputBlur(evt.target),
  },
}

const PASSWORD_REPEAT = {
  label: 'Пароль (ещё раз)',
  type: 'passwordRepeat',
  name: 'passwordRepeat',
  required: true,
}

const BUTTON = {
  buttonText: 'Зарегистрироваться',
  buttonType: 'submit',
  events: {
    click: (evt: MouseEvent) => validator.onSubmit(evt, evt.target),
  },
}

const FORM_DATA = {
  title: 'Регистрация',
  email: new Input(EMAIL),
  login: new Input(LOGIN),
  firstName: new Input(NAME),
  lastName: new Input(LAST_NAME),
  phone: new Input(PHONE),
  password: new Input(PASSWORD),
  passwordRepeat: new Input(PASSWORD_REPEAT),
  button: new Button(BUTTON)
}

export class Registration extends Block {
  constructor(props?: any) {
    super(props);
  }

  componentDidMount(): void {
    this.setProps(FORM_DATA);
  }

  render(): Element {
    return <Element>this.compile(registrationTmpl, this.props);
  }
}
