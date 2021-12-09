import Block from '../../modules/block';
import profileTmpl from './profile.tmpl';
import { Avatar } from '../../components/avatar/avatar';
import { InputProfile } from '../../components/input-profile/input-profile';
import { Button } from '../../components/button/button';
import './profile.scss';

const EMAIL = {
  label: 'Почта',
  type: 'email',
  name: 'email',
  value: 'pochta@yandex.ru',
  disabled: true,
}

const LOGIN = {
  label: 'Логин',
  type: 'text',
  name: 'login',
  value: 'ivanivanov',
  disabled: true,
}

const NAME = {
  label: 'Имя',
  type: 'text',
  name: 'first_name',
  value: 'Иван',
  disabled: true,
}

const LAST_NAME = {
  label: 'Фамилия',
  type: 'text',
  name: 'second_name',
  value: 'Иванов',
  disabled: true,
}

const USERNAME = {
  label: 'Имя в чате',
  type: 'text',
  name: 'display_name',
  value: 'Иван',
  disabled: true,
}

const PHONE = {
  label: 'Телефон',
  type: 'tel',
  name: 'phone',
  value: '+7 (909) 967 30 30',
  disabled: true,
}

const BUTTON = {
  buttonText: 'Сохранить',
  buttonType: 'submit'
}

const PROFILE_DATA = {
  avatar: new Avatar(),
  name: 'Иван',
  profileNotChange: true,
  email: new InputProfile(EMAIL),
  login: new InputProfile(LOGIN),
  firstName: new InputProfile(NAME),
  lastName: new InputProfile(LAST_NAME),
  username: new InputProfile(USERNAME),
  phone: new InputProfile(PHONE),
  button: new Button(BUTTON),
}

export class Profile extends Block {
  constructor(props?: any) {
    super(props);
  }

  componentDidMount(): void {
    this.setProps(PROFILE_DATA);
  }

  render(): Element {
    // @ts-ignore
    return this.compile(profileTmpl, this.props);
  }
}
