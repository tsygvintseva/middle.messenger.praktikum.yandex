import Block from '../../modules/block';
import inputTmpl from './input.tmpl';
import './input.scss';

export class Input extends Block {
  constructor(props?: any) {
    super(props);
  }

  render(): Element {
    return <Element>this.compile(inputTmpl, this.props);
  }
}
