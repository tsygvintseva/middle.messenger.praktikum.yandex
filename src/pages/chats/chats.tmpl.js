export default `
  <section class="chats">
  
    <div class="chats__dialogue-wrap">
      <div class="chats__search-wrap">
        <a href="/#profile" class="chats__link">Профиль</a>
        {{> search}}
      </div>
    
      {{#each chatDialogue}}
        {{> chatDialogue}}
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
          
          {{#if chatsUtilsModal}}
          <div class="chats__utils-modal">
            {{> chatUtils}}
          </div>
          {{/if}}
          
        </div>

        <div class="chats__content">
          <span class="chats__date">{{chatsDate}}</span>
          
          <div class="chats__incoming">
            {{#each messageIncoming}}
              {{> messageIncoming}}
            {{/each}} 
          </div>
          
          <div class="chats__outgoing">
            {{#each messageOutgoing}}
              {{> messageOutgoing}}
            {{/each}} 
          </div>
        </div>
        
        <div class="chats__footer">
          {{> messageForm}}
          
          {{#if chatsAttachFile}}
          <div class="chats__attach-file-modal">
          {{> chatAttachFile}}
          </div>
          {{/if}}
        </div>
        
      </section>
      {{/if}}
        
    </div>
    
  </div>
`;
