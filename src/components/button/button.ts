import Block from '../../modules/block';
import buttonTmpl from './button.tmpl';
import './button.scss';

export class Button extends Block {
  constructor(props?: any) {
    super(props);
  }

  render(): Element {
    return <Element>this.compile(buttonTmpl, this.props);
  }
}
