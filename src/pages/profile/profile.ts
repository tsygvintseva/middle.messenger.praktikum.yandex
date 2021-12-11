import Block from '../../modules/block';
import profileTmpl from './profile.tmpl';
import FormValidator from '../../modules/form-validator';
import { Avatar } from '../../components/avatar/avatar';
import { InputProfile } from '../../components/input-profile/input-profile';
import { Button } from '../../components/button/button';
import './profile.scss';

const validator = new FormValidator();

const EMAIL = {
  label: 'Почта',
  type: 'email',
  name: 'email',
  value: 'pochta@yandex.ru',
  // disabled: true,
  events: {
    focusin: (evt: FocusEvent) => validator.onInputFocus(evt.target),
    focusout: (evt: FocusEvent) => validator.onInputBlur(evt.target),
  },
}

const LOGIN = {
  label: 'Логин',
  type: 'text',
  name: 'login',
  value: 'ivanivanov',
  events: {
    focusin: (evt: FocusEvent) => validator.onInputFocus(evt.target),
    focusout: (evt: FocusEvent) => validator.onInputBlur(evt.target),
  },
}

const NAME = {
  label: 'Имя',
  type: 'text',
  name: 'first_name',
  value: 'Иван',
  events: {
    focusin: (evt: FocusEvent) => validator.onInputFocus(evt.target),
    focusout: (evt: FocusEvent) => validator.onInputBlur(evt.target),
  },
}

const LAST_NAME = {
  label: 'Фамилия',
  type: 'text',
  name: 'second_name',
  value: 'Иванов',
  events: {
    focusin: (evt: FocusEvent) => validator.onInputFocus(evt.target),
    focusout: (evt: FocusEvent) => validator.onInputBlur(evt.target),
  },
}

const USERNAME = {
  label: 'Имя в чате',
  type: 'text',
  name: 'display_name',
  value: 'Иван',
}

const PHONE = {
  label: 'Телефон',
  type: 'tel',
  name: 'phone',
  value: '+7 (909) 967 30 30',
  events: {
    focusin: (evt: FocusEvent) => validator.onInputFocus(evt.target),
    focusout: (evt: FocusEvent) => validator.onInputBlur(evt.target),
  },
}

const BUTTON = {
  buttonText: 'Сохранить',
  buttonType: 'submit',
  events: {
    click: (evt: MouseEvent) => validator.onSubmit(evt, evt.target),
  },
}

const PROFILE_DATA = {
  avatar: new Avatar(),
  name: 'Иван',
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
    return <Element>this.compile(profileTmpl, this.props);
  }
}
