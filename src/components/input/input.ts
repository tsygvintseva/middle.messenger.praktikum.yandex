import Block from '../../modules/block';
import inputTmpl from './input.tmpl';
import './input.scss';

interface InputProps {
  type: string;
  name: string;
  required: boolean;
  label: string;
}

export class Input extends Block {
  constructor(props?: InputProps) {
    super(props);
  }

  render(): Element {
    return <Element>this.compile(inputTmpl, this.props);
  }
}
