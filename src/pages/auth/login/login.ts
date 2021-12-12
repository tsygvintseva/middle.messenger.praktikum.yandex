import Block from '../../../modules/block';
import loginTmpl from './login.tmpl';
import FormValidator from '../../../modules/form-validator';
import { Input } from '../../../components/input/input';
import { Button } from '../../../components/button/button';
import '../auth.scss';

const validator = new FormValidator();

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

const BUTTON = {
  buttonText: 'Войти',
  buttonType: 'submit',
  events: {
    click: (evt: MouseEvent) => validator.onSubmit(evt, evt.target),
  },
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
    return <Element>this.compile(loginTmpl, this.props);
  }
}
