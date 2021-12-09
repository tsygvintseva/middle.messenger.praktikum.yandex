import Block from '../../../modules/block';
import registrationTmpl from './registration.tmpl';
import { Input } from '../../../components/input/input';
import { Button } from '../../../components/button/button';
import '../auth.scss';

const EMAIL = {
  label: 'Почта',
  type: 'email',
  name: 'email',
  required: true,
  validationError: 'Поле не заполнено',
}

const LOGIN = {
  label: 'Логин',
  type: 'text',
  name: 'login',
  required: true,
  validationError: 'Неверный логин',
}

const NAME = {
  label: 'Имя',
  type: 'text',
  name: 'first_name',
  required: true,
  validationError: 'Поле не заполнено',
}

const LAST_NAME = {
  label: 'Фамилия',
  type: 'text',
  name: 'second_name',
  required: true,
  validationError: 'Поле не заполнено',
}

const PHONE = {
  label: 'Телефон',
  type: 'tel',
  name: 'phone',
  required: true,
  validationError: 'Поле не заполнено',
}

const PASSWORD = {
  label: 'Пароль',
  type: 'password',
  name: 'password',
  required: true,
  validationError: 'Неверный пароль',
}

const PASSWORD_REPEAT = {
  label: 'Пароль (ещё раз)',
  type: 'passwordRepeat',
  name: 'passwordRepeat',
  required: true,
  validationError: 'Пароли не совпадают',
}

const BUTTON = {
  buttonText: 'Зарегистрироваться',
  buttonType: 'submit'
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
    // @ts-ignore
    return this.compile(registrationTmpl, this.props);
  }
}
