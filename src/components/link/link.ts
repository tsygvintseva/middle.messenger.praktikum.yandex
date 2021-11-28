import Handlebars from 'handlebars';
import linkTemplate from './link.tmpl';
import './link.scss';

const link = Handlebars.compile(linkTemplate);

Handlebars.registerPartial('link', link);

export default link;
