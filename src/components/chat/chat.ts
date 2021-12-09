import * as Handlebars from 'handlebars';
import chatTmpl from './chat.tmpl';
import './chat.scss';

const chat = Handlebars.compile(chatTmpl);

Handlebars.registerPartial('chat', chat);

export default chat;
