export default `
    <div class="chat-dialogue">
    <div class="chat-dialogue__preview">
        <img src="" alt="">
        <div>
            <p class="chat-dialogue__author">{{chatName}}</p>
            <div class="chat-dialogue__message">
            
              <p>
                {{#if chatYourMessage}}
                <span class="chat-dialogue__you">
                Вы: 
                </span>
                {{/if}}
                
                {{#if chatMessage}}
                <span>
                    {{chatMessageText}}
                </span>
                {{/if}}
                
                {{#if chatImg}}
                <span>Изображение</span>
                {{/if}}
                
                {{#if chatSticker}}
                <span>Стикер</span>
                {{/if}}
                
            </div>
        </div>
      </div>
      <div class="chat-dialogue__info">
          <span class="chat-dialogue__time">15:12</span>
          
          {{#if chatUnread}}
          <span class="chat-dialogue__count">
            {{chatUnreadCount}}
          </span>
          {{/if}}
      </div>
  </div>
`;
