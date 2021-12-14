export default `
    <div class="chat">
    <div class="chat__preview">
      <img src="" alt="">
      <div>
          <p class="chat__author">{{chatName}}</p>
          <div class="chat__message">
          
            <p>
              {{#if isChatYourMessage}}
              <span class="chat__you">Вы: </span>
              {{/if}}
              
              {{#if isChatMessage}}
              <span>{{chatMessageText}}</span>
              {{/if}}
              
              {{#if isChatImg}}
              <span>Изображение</span>
              {{/if}}
              
              {{#if isChatSticker}}
              <span>Стикер</span>
              {{/if}}
              
          </div>
      </div>
      </div>
    <div class="chat__info">
        <span class="chat__time">15:12</span>
        
        {{#if isChatUnread}}
        <span class="chat__count">{{chatUnreadCount}}</span>
        {{/if}}
        
      </div>
  </div>
`;
