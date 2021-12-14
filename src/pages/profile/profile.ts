import Block from '../../modules/block';
import profileTmpl from './profile.tmpl';
import { Avatar } from '../../components/avatar/avatar';
import { Button } from '../../components/button/button';
import { InputProfile } from '../../components/input-profile/input-profile';
import './profile.scss';

interface ProfileProps {
  avatar: Avatar,
  name: string,
  email: InputProfile,
  login: InputProfile,
  firstName: InputProfile,
  lastName: InputProfile,
  username: InputProfile,
  phone: InputProfile,
  button: Button
}

export class Profile extends Block {
  constructor(props?: ProfileProps) {
    super(props);
  }

  render(): Element {
    return <Element>this.compile(profileTmpl, this.props);
  }
}
