import Handlebars from 'handlebars';
import avatarTemplate from './avatar.tmpl';
import './avatar.scss';

const avatar = Handlebars.compile(avatarTemplate);

Handlebars.registerPartial('avatar', avatar);

export default avatar;
