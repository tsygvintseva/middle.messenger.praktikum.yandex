import Block from '../../modules/block';
import avatarTmpl from './avatar.tmpl';
import './avatar.scss';

export class Avatar extends Block {
  constructor(props?: any) {
    super(props);
  }

  render(): Element {
    // @ts-ignore
    return this.compile(avatarTmpl, this.props);
  }
}

