import * as Handlebars from 'handlebars';
import avatarModalTemplate from './avatar-modal.tmpl';
import './avatar-modal.scss';

const avatarModal = Handlebars.compile(avatarModalTemplate);

Handlebars.registerPartial('avatarModal', avatarModal);

export default avatarModal;
