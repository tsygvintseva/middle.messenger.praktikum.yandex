import Block from '../../modules/block';
import avatarTmpl from './avatar.tmpl';
import './avatar.scss';

interface AvatarProps {
  isAvatar: boolean;
}

export class Avatar extends Block {
  constructor(props?: AvatarProps) {
    super(props);
  }

  render(): Element {
    return <Element>this.compile(avatarTmpl, this.props);
  }
}

