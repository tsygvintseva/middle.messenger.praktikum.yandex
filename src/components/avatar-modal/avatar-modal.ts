import Block from '../../modules/block';
import avatarModalTmpl from './avatar-modal.tmpl';
import './avatar-modal.scss';

export class AvatarModal extends Block {
  constructor(props?: any) {
    super(props);
  }

  render(): Element {
    // @ts-ignore
    return this.compile(avatarModalTmpl, this.props);
  }
}
