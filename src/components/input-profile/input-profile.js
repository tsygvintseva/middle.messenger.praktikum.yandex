import Handlebars from 'handlebars';
import inputProfileTemplate from './input-profile.tmpl';
import './input-profile.scss';

const inputProfile = Handlebars.compile(inputProfileTemplate);

Handlebars.registerPartial('inputProfile', inputProfile);

export default inputProfile;
