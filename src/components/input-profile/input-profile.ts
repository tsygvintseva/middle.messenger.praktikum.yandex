import Block from '../../modules/block';
import inputProfileTmpl from './input-profile.tmpl';
import './input-profile.scss';

export class InputProfile extends Block {
  constructor(props?: any) {
    super(props);
  }

  render(): Element {
    // @ts-ignore
    return this.compile(inputProfileTmpl, this.props);
  }
}
