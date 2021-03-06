export default `
  <section class="chats">
  
    <div class="chats__dialogue-wrap">
      <div class="chats__search-wrap">
        <a href="/#profile" class="chats__link">Профиль</a>
        <div class="chats__search">
          <input class="chats__search-input" type="search">
        </div>
      </div>
    
      {{#each chat}}
        {{> chat}}
      {{/each}} 
      
    </div>
    
    <div class="chats__window">
    
      {{#if chatsEmpty}}
      <p class="chats__empty">Выберите чат, чтобы отправить сообщение</p>
      {{else}}
      <section class="chats__wrap">
      
        <div class="chats__header">
          <div class="chats__header-wrap">
            <img src="" alt="" class="chats__avatar">
            <span class="chats__name">{{chatName}}</span>
          </div>
          <button class="chats__utils-btn" aria-label="Настройки чата"></button>
          
          {{#if isChatsUtilsModal}}
          <div class="chat-utils">
              <div class="chat-utils__content">
                <button class="chat-utils__btn chat-utils__btn--add">Добавить пользователя</button>
                <button class="chat-utils__btn chat-utils__btn--delete">Удалить пользователя</button>
              </div>
          </div>
          {{/if}}
          
        </div>

        <div class="chats__content">
          <span class="chats__date">{{chatsDate}}</span>
          
          <div class="chats__message">
            {{#each message}}
              {{> message}}
            {{/each}} 
          </div>
          
        </div>
        
        <div class="chats__footer">
          {{{messageForm}}}
        </div>
        
      </section>
      {{/if}}
        
    </div>
    
  </div>
`;
