import Block from '../../modules/block';
import chatTemplate from './chats.tmpl';
import { MessageForm } from '../../components/message-form/message-form';
import '../../components/chat/chat';
import '../../components/message/message';
import './chats.scss';


interface ChatProps {
  chatName: string,
  isChatImg?: boolean,
  isChatUnread?: boolean,
  chatUnreadCount?: number
  isChatYourMessage?: boolean,
  isChatSticker?: boolean,
  isChatMessage?: boolean,
  chatMessageText?: string
}

interface MessageProps {
  isMessageOutgoing?: boolean,
  isMessageIncoming?: boolean,
  isMessageText?: boolean,
  messageText?: string,
  messageTime: string,
  isMessageRead?: boolean
}

interface ChatsProps {
  chatName: string,
  isChatsUtilsModal: boolean,
  chatsDate: string,
  chat: ChatProps[],
  message: MessageProps[],
  messageForm: MessageForm
}

export class Chats extends Block {
  constructor(props?: ChatsProps) {
    super(props);
  }

  render(): Element {
    return <Element>this.compile(chatTemplate, this.props);
  }
}
