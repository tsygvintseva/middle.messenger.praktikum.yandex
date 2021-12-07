import * as Handlebars from 'handlebars';

import loginTmpl from './login.tmpl';
import Block from '../../../modules/block';
import { Button } from '../../../components/button/button';
// import '../../../components/input/input';

import '../auth.scss';

const BUTTON = {
    buttonText: 'Войти',
    buttonType: 'submit'
}

const DATA = {
  title: 'Вход',
  button: new Button(BUTTON)
}

export class Login extends Block {
  constructor(props?: any) {
    super('div', props);
  }

  componentDidMount() {
    this.setProps(DATA);
  }

  render() {
    const template = Handlebars.compile(loginTmpl);

    return template(this.props);
  }
}

// const login = Handlebars.compile(loginTemplate);
//
// const data = {
//   title: 'Вход',
//   input: [
//     {
//       label: 'Логин',
//       type: 'text',
//       name: 'login',
//       required: true,
//       validationError: 'Неверный логин',
//     },
//     {
//       label: 'Пароль',
//       type: 'password',
//       name: 'password',
//       required: true,
//       validationError: 'Неверный пароль',
//     },
//   ],
//   buttonText: 'Войти',
//   buttonType: 'submit',
// };
//
// export default login(data);
