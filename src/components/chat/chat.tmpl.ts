export default `
    <div class="chat">
    <div class="chat__preview">
      <img src="" alt="">
      <div>
          <p class="chat__author">{{chatName}}</p>
          <div class="chat__message">
          
            <p>
              {{#if chatYourMessage}}
              <span class="chat__you">Вы: </span>
              {{/if}}
              
              {{#if chatMessage}}
              <span>{{chatMessageText}}</span>
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
    <div class="chat__info">
        <span class="chat__time">15:12</span>
        
        {{#if chatUnread}}
        <span class="chat__count">{{chatUnreadCount}}</span>
        {{/if}}
        
      </div>
  </div>
`;
