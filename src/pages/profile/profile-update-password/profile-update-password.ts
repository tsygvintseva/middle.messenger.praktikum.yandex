import Block from '../../../modules/block';
import profileUpdatePasswordTmpl from './profile-update-password.tmpl';
import FormValidator from '../../../modules/form-validator';
import { Avatar } from '../../../components/avatar/avatar';
import { InputProfile } from '../../../components/input-profile/input-profile';
import { Button } from '../../../components/button/button';
import '../profile.scss';

const validator = new FormValidator();

const OLD_PASSWORD = {
  label: 'Старый пароль',
  type: 'password',
  name: 'oldPassword',
  value: '123',
}

const PASSWORD = {
  label: 'Новый пароль',
  type: 'password',
  name: 'password',
  value: '123',
  events: {
    focusin: (evt: FocusEvent) => validator.onInputFocus(evt.target),
    focusout: (evt: FocusEvent) => validator.onInputBlur(evt.target),
  },
}

const CONFIRM_PASSWORD = {
  label: 'Повторите новый пароль',
  type: 'password',
  name: 'confirmPassword',
  value: '123',
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
  button: new Button(BUTTON),
  oldPassword: new InputProfile(OLD_PASSWORD),
  password: new InputProfile(PASSWORD),
  confirmPassword: new InputProfile(CONFIRM_PASSWORD)
}

export class ProfileUpdatePassword extends Block {
  constructor(props?: any) {
    super(props);
  }

  componentDidMount(): void {
    this.setProps(PROFILE_DATA);
  }

  render(): Element {
    // @ts-ignore
    return this.compile(profileUpdatePasswordTmpl, this.props);
  }
}
