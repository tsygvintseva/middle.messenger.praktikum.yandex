import * as Handlebars from 'handlebars';
import loginTmpl from './login.tmpl';
// import '../auth.scss';
// import '../../../components/input/input';
// import '../../../components/button/button';
// import '../../../components/link/link';
import { Button } from '../../../components/button/button';
import Block from '../../../modules/block';
import { compile } from 'handlebars';

const BUTTON = {
    buttonText: 'Войти',
    buttonType: 'submit'
}

const DATA = {
  title: 'Вход',
  button: new Button({
    buttonText: 'Войти',
    buttonType: 'submit'
  })
}

export class Login extends Block {
  // constructor() {
  //   super('div', {
  //     loginInput: new Button({
  //       buttonText: 'Войти',
  //       buttonType: 'submit',
  //     }),
  //   });
  // }
  //
  // render() {
  //   const template = Handlebars.compile(loginTmpl);
  //   return template({
  //     button: this.props.button,
  //   });
  // }

  constructor(props?: any) {
    super(props);
  }

  componentDidMount() {
    this.setProps(DATA);
  }

  public render() {
    const template = Handlebars.compile(loginTmpl);

    return template(this.props);
  }

  // public render() {
  //   return this.compile(loginTmpl, this.props);
  // }
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
