import Handlebars from 'handlebars';
import loginTemplate from './login.tmpl';
import '../auth.scss';
import '../../../components/input/input';
import '../../../components/button/button';
import '../../../components/link/link';

const login = Handlebars.compile(loginTemplate);

const data = {
  title: 'Вход',
  input: [
    {
      label: 'Логин',
      type: 'text',
      name: 'login',
      required: true,
      validationError: 'Неверный логин',
    },
    {
      label: 'Пароль',
      type: 'password',
      name: 'password',
      required: true,
      validationError: 'Неверный пароль',
    },
  ],
  buttonText: 'Войти',
  buttonType: 'submit',
  linkHref: '/#registration',
  linkText: 'Нет аккаунта?',
};

export default login(data);
