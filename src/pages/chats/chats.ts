import Block from '../../modules/block';
import chatTemplate from './chats.tmpl';
import { MessageForm } from '../../components/message-form/message-form';
import '../../components/chat/chat';
import '../../components/message/message';
import './chats.scss';

const CHATS_DATA = {
  chat: [
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
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
        'Fusce cursus egestas tortor, ut placerat mauris rutrum a.',
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
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
        'Fusce cursus egestas tortor, ut placerat mauris rutrum a.',
    },
    {
      chatName: '1, 2, 3',
      chatMessage: true,
      chatMessageText:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
        'Fusce cursus egestas tortor, ut placerat mauris rutrum a.',
    },
    {
      chatName: 'Design Destroyer',
      chatMessage: true,
      chatMessageText:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
        'Fusce cursus egestas tortor, ut placerat mauris rutrum a.',
    },
    {
      chatName: 'Day.',
      chatMessage: true,
      chatMessageText:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
        'Fusce cursus egestas tortor, ut placerat mauris rutrum a.',
    },
    {
      chatName: 'тет-а-теты',
      chatMessage: true,
      chatMessageText:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
        'Fusce cursus egestas tortor, ut placerat mauris rutrum a.',
    },
    {
      chatName: '1, 2, 3',
      chatMessage: true,
      chatMessageText:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
        'Fusce cursus egestas tortor, ut placerat mauris rutrum a.',
    },
    {
      chatName: 'Design Destroyer',
      chatMessage: true,
      chatMessageText:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
        'Fusce cursus egestas tortor, ut placerat mauris rutrum a.',
    },
    {
      chatName: 'Day.',
      chatMessage: true,
      chatMessageText:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
        'Fusce cursus egestas tortor, ut placerat mauris rutrum a.',
    },
  ],
  chatName: 'Вадим',
  chatsUtilsModal: true,
  chatsAttachFile: true,
  chatsDate: '19 июня',
  message: [
    {
      isMessageIncoming: true,
      isMessageText: true,
      messageText:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
        'Fusce cursus egestas tortor, ut placerat mauris rutrum a.',
      messageTime: '11:56',
    },
    {
      isMessageIncoming: true,
      isMessageImg: true,
      messageTime: '11:56',
    },
    {
      isMessageIncoming: true,
      isMessageText: true,
      messageText:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
        'Fusce cursus egestas tortor, ut placerat mauris rutrum a.',
      messageTime: '11:56',
    },
    {
      isMessageIncoming: true,
      isMessageImg: true,
      messageTime: '11:56',
    },
    {
      isMessageOutgoing: true,
      isMessageText: true,
      messageText: 'Круто!',
      messageTime: '12:00',
      isMessageRead: true,
    },
  ],
  messageForm: new MessageForm()
}

export class Chats extends Block {
  constructor(props?: any) {
    super(props);
  }

  componentDidMount(): void {
    this.setProps(CHATS_DATA);
  }

  render(): Element {
    // @ts-ignore
    return this.compile(chatTemplate, this.props);
  }
}
