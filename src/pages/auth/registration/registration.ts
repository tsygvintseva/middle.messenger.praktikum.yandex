import * as Handlebars from 'handlebars';
import registrationTemplate from './registration.tmpl';
import '../auth.scss';
import '../../../components/input/input';
import '../../../components/button/button';

const registration = Handlebars.compile(registrationTemplate);

const data = {
  title: 'Регистрация',
  input: [
    {
      label: 'Почта',
      type: 'email',
      name: 'email',
      required: true,
      validationError: 'Поле не заполнено',
    },
    {
      label: 'Логин',
      type: 'text',
      name: 'login',
      required: true,
      validationError: 'Поле не заполнено',
    },
    {
      label: 'Имя',
      type: 'text',
      name: 'first_name',
      required: true,
      validationError: 'Поле не заполнено',
    },
    {
      label: 'Фамилия',
      type: 'text',
      name: 'second_name',
      required: true,
      validationError: 'Поле не заполнено',
    },
    {
      label: 'Телефон',
      type: 'tel',
      name: 'phone',
      required: true,
      validationError: 'Поле не заполнено',
    },
    {
      label: 'Пароль',
      type: 'password',
      name: 'password',
      required: true,
      validationError: 'Поле не заполнено',
    },
    {
      label: 'Пароль (ещё раз)',
      type: 'password',
      name: 'passwordRepeat',
      required: true,
      validationError: 'Пароли не совпадают',
    },
  ],
  buttonText: 'Зарегистрироваться',
  buttonType: 'submit',
};

export default registration(data);
