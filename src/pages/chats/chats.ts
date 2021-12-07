import * as Handlebars from 'handlebars';
import chatsTemplate from './chats.tmpl';
import './chats.scss';
import '../../components/search/search';
import '../../components/chat-dialogue/chat-dialogue';
import '../../components/message-incoming/message-incoming';
import '../../components/message-outgoing/message-outgoing';
import '../../components/message-form/message-form';

const chats = Handlebars.compile(chatsTemplate);

const data = {
  chatDialogue: [
    {
      chatName: 'Андрей',
      chatImg: true,
      chatUnread: true,
      chatUnreadCount: 2,
    },
    {
      chatName: 'Киноклуб',
      chatYourMessage: true,
      chatSticker: true,
    },
    {
      chatName: 'Илья',
      chatMessage: true,
      chatMessageText:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce cursus egestas tortor, ut placerat mauris rutrum a.',
      chatUnread: true,
      chatUnreadCount: 4,
    },
    {
      chatName: 'Вадим',
      chatMessage: true,
      chatMessageText: 'Круто!',
    },
    {
      chatName: 'тет-а-теты',
      chatMessage: true,
      chatMessageText:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce cursus egestas tortor, ut placerat mauris rutrum a.',
    },
    {
      chatName: '1, 2, 3',
      chatMessage: true,
      chatMessageText:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce cursus egestas tortor, ut placerat mauris rutrum a.',
    },
    {
      chatName: 'Design Destroyer',
      chatMessage: true,
      chatMessageText:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce cursus egestas tortor, ut placerat mauris rutrum a.',
    },
    {
      chatName: 'Day.',
      chatMessage: true,
      chatMessageText:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce cursus egestas tortor, ut placerat mauris rutrum a.',
    },
    {
      chatName: 'тет-а-теты',
      chatMessage: true,
      chatMessageText:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce cursus egestas tortor, ut placerat mauris rutrum a.',
    },
    {
      chatName: '1, 2, 3',
      chatMessage: true,
      chatMessageText:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce cursus egestas tortor, ut placerat mauris rutrum a.',
    },
    {
      chatName: 'Design Destroyer',
      chatMessage: true,
      chatMessageText:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce cursus egestas tortor, ut placerat mauris rutrum a.',
    },
    {
      chatName: 'Day.',
      chatMessage: true,
      chatMessageText:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce cursus egestas tortor, ut placerat mauris rutrum a.',
    },
  ],
  chatName: 'Вадим',
  chatsUtilsModal: true,
  chatsAttachFile: true,
  chatsDate: '19 июня',
  messageIncoming: [
    {
      isMessageText: true,
      messageText:
        'Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то ' +
        'момент попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все ' +
        'знаем что астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все ' +
        'еще находятся на поверхности Луны, так как астронавты с собой забрали только кассеты с пленкой.\n' +
        '\n' +
        'Хассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету они так ' +
        'никогда и не попали. Всего их было произведено 25 штук, одну из них недавно продали на аукционе ' +
        'за 45000 евро.',
      messageTime: '11:56',
    },
    {
      isMessageImg: true,
      messageTime: '11:56',
    },
    {
      isMessageText: true,
      messageText:
        'Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент ' +
        'попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все знаем что ' +
        'астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все еще находятся ' +
        'на поверхности Луны, так как астронавты с собой забрали только кассеты с пленкой.\n' +
        '\n' +
        'Хассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету они так ' +
        'никогда и не попали. Всего их было произведено 25 штук, одну из них недавно продали на аукционе ' +
        'за 45000 евро.',
      messageTime: '11:56',
    },
    {
      isMessageImg: true,
      messageTime: '11:56',
    },
  ],
  messageOutgoing: [
    {
      isMessageText: true,
      messageText: 'Круто!',
      messageTime: '12:00',
      isMessageRead: true,
    },
  ],
};

export default chats(data);
