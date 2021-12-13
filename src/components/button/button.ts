import Block from '../../modules/block';
import buttonTmpl from './button.tmpl';
import './button.scss';

interface ButtonProps {
  type: string;
  text?: string;
  isMessageForm?: boolean;
}

export class Button extends Block {
  constructor(props?: ButtonProps) {
    super(props);
  }

  render(): Element {
    return <Element>this.compile(buttonTmpl, this.props);
  }
}
