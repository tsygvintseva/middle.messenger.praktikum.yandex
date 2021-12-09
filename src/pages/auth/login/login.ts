import Block from '../../../modules/block';
import loginTmpl from './login.tmpl';
import { Input } from '../../../components/input/input';
import { Button } from '../../../components/button/button';
import '../auth.scss';

const LOGIN = {
  label: 'Логин',
  type: 'text',
  name: 'login',
  required: true,
  validationError: 'Неверный логин',
}

const PASSWORD = {
  label: 'Пароль',
  type: 'password',
  name: 'password',
  required: true,
  validationError: 'Неверный пароль',
}

const BUTTON = {
  buttonText: 'Войти',
  buttonType: 'submit'
}

const FORM_DATA = {
  title: 'Вход',
  login: new Input(LOGIN),
  password: new Input(PASSWORD),
  button: new Button(BUTTON)
}

export class Login extends Block {
  constructor(props?: any) {
    super(props);
  }

  componentDidMount(): void {
    this.setProps(FORM_DATA);
  }

  render(): Element {
    // @ts-ignore
    return this.compile(loginTmpl, this.props);
  }
}
