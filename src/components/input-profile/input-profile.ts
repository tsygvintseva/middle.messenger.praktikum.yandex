import Block from '../../modules/block';
import inputProfileTmpl from './input-profile.tmpl';
import './input-profile.scss';

interface InputProfileProps {
  type: string;
  name: string;
  label: string;
  value: string;
  disabled?: boolean;
}

export class InputProfile extends Block {
  constructor(props?: InputProfileProps) {
    super(props);
  }

  render(): Element {
    return <Element>this.compile(inputProfileTmpl, this.props);
  }
}
