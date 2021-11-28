import Handlebars from 'handlebars';
import buttonTemplate from './button.tmpl';
import './button.scss';

const button = Handlebars.compile(buttonTemplate);

Handlebars.registerPartial('button', button);

export default button;
