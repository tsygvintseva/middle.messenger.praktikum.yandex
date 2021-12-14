import Block from '../../modules/block';
import avatarModalTmpl from './avatar-modal.tmpl';
import './avatar-modal.scss';

interface AvatarModalProps {
  isModal: boolean;
  isUploaded: boolean;
  isUploadError: boolean;
  fileName: string;
  isValidationError: boolean;
}

export class AvatarModal extends Block {
  constructor(props?: AvatarModalProps) {
    super(props);
  }

  render(): Element {
    return <Element>this.compile(avatarModalTmpl, this.props);
  }
}
