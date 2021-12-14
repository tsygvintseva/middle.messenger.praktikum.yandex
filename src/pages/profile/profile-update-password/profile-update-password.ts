import Block from '../../../modules/block';
import profileUpdatePasswordTmpl from './profile-update-password.tmpl';
import { Button } from '../../../components/button/button';
import { Avatar } from '../../../components/avatar/avatar';
import { InputProfile } from '../../../components/input-profile/input-profile';
import '../profile.scss';

interface ProfileUpdatePasswordProps {
  avatar: Avatar,
  button: Button,
  oldPassword: InputProfile,
  password: InputProfile,
  confirmPassword: InputProfile
}

export class ProfileUpdatePassword extends Block {
  constructor(props?: ProfileUpdatePasswordProps) {
    super(props);
  }

  render(): Element {
    return <Element>this.compile(profileUpdatePasswordTmpl, this.props);
  }
}
