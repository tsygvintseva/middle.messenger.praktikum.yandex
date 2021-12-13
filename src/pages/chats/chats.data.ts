import { MessageForm } from '../../components/message-form/message-form';

export const CHATS_PROPS = {
  chat: [
    {
      chatName: 'Андрей',
      isChatImg: true,
      isChatUnread: true,
      chatUnreadCount: 2,
    },
    {
      chatName: 'Киноклуб',
      isChatYourMessage: true,
      isChatSticker: true,
    },
    {
      chatName: 'Илья',
      isChatMessage: true,
      chatMessageText:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
        'Fusce cursus egestas tortor, ut placerat mauris rutrum a.',
      isChatUnread: true,
      chatUnreadCount: 4,
    },
    {
      chatName: 'Вадим',
      isChatMessage: true,
      chatMessageText: 'Круто!',
    },
    {
      chatName: 'тет-а-теты',
      isChatMessage: true,
      chatMessageText:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
        'Fusce cursus egestas tortor, ut placerat mauris rutrum a.',
    },
    {
      chatName: '1, 2, 3',
      isChatMessage: true,
      chatMessageText:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
        'Fusce cursus egestas tortor, ut placerat mauris rutrum a.',
    },
    {
      chatName: 'Design Destroyer',
      isChatMessage: true,
      chatMessageText:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
        'Fusce cursus egestas tortor, ut placerat mauris rutrum a.',
    },
    {
      chatName: 'Day.',
      isChatMessage: true,
      chatMessageText:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
        'Fusce cursus egestas tortor, ut placerat mauris rutrum a.',
    },
    {
      chatName: 'тет-а-теты',
      isChatMessage: true,
      chatMessageText:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
        'Fusce cursus egestas tortor, ut placerat mauris rutrum a.',
    },
    {
      chatName: '1, 2, 3',
      isChatMessage: true,
      chatMessageText:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
        'Fusce cursus egestas tortor, ut placerat mauris rutrum a.',
    },
    {
      chatName: 'Design Destroyer',
      isChatMessage: true,
      chatMessageText:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
        'Fusce cursus egestas tortor, ut placerat mauris rutrum a.',
    },
    {
      chatName: 'Day.',
      isChatMessage: true,
      chatMessageText:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
        'Fusce cursus egestas tortor, ut placerat mauris rutrum a.',
    },
  ],
  chatName: 'Вадим',
  isChatsUtilsModal: true,
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
