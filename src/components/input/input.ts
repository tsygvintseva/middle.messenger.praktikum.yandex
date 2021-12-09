import Block from '../../modules/block';
import inputTmpl from './input.tmpl';
import './input.scss';

export class Input extends Block {
  constructor(props?: any) {
    super(props);
  }

  render(): Element {
    // @ts-ignore
    return this.compile(inputTmpl, this.props);
  }
}
