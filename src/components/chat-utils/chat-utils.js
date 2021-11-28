import Handlebars from 'handlebars';
import chatUtilsTemplate from './chat-utils.tmpl';

const chatUtils = Handlebars.compile(chatUtilsTemplate);

Handlebars.registerPartial('chatUtils', chatUtils);

export default chatUtils;
