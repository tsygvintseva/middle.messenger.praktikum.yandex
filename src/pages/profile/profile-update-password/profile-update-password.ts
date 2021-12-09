import Block from '../../../modules/block';
import profileUpdatePasswordTmpl from './profile-update-password.tmpl';
import { Avatar } from '../../../components/avatar/avatar';
import { Button } from '../../../components/button/button';
import '../profile.scss';
import { InputProfile } from '../../../components/input-profile/input-profile';

const OLD_PASSWORD = {
  label: 'Старый пароль',
  type: 'password',
  name: 'oldPassword',
  value: '123',
}

const NEW_PASSWORD = {
  label: 'Новый пароль',
  type: 'password',
  name: 'newPassword',
  value: '123',
}

const CONFIRM_PASSWORD = {
  label: 'Повторите новый пароль',
  type: 'password',
  name: 'confirmPassword',
  value: '123',
}

const BUTTON = {
  buttonText: 'Сохранить',
  buttonType: 'submit'
}

const PROFILE_DATA = {
  avatar: new Avatar(),
  button: new Button(BUTTON),
  oldPassword: new InputProfile(OLD_PASSWORD),
  newPassword: new InputProfile(NEW_PASSWORD),
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
