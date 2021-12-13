import Block from '../../../modules/block';
import registrationTmpl from './registration.tmpl';
import { Input } from '../../../components/input/input';
import { Button } from '../../../components/button/button';
import '../auth.scss';

interface RegistrationProps {
  title: string,
  email: Input,
  login: Input,
  firstName: Input,
  lastName: Input,
  phone: Input,
  password: Input,
  passwordRepeat: Input,
  button: Button
}

export class Registration extends Block {
  constructor(props?: RegistrationProps) {
    super(props);
  }

  render(): Element {
    return <Element>this.compile(registrationTmpl, this.props);
  }
}
