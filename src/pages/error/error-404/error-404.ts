import * as Handlebars from 'handlebars';
import errorTemplate from './error-404.tmpl';
import '../error.scss';

const error404 = Handlebars.compile(errorTemplate);

const data = {
  errorCode: '404',
  errorDesc: 'Не туда попали',
};

export default error404(data);
