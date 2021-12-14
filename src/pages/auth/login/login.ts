import Block from '../../../modules/block';
import loginTmpl from './login.tmpl';
import { Input } from '../../../components/input/input';
import { Button } from '../../../components/button/button';
import '../auth.scss';

interface LoginProps {
  title: string,
  login: Input,
  password: Input,
  button: Button
}

export class Login extends Block {
  constructor(props?: LoginProps) {
    super(props);
  }

  render(): Element {
    return <Element>this.compile(loginTmpl, this.props);
  }
}
