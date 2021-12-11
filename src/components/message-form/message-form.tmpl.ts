export default `
  <form class="message-form">
    <div class='chat-utils chat-utils--attach-file'>
      <div class="chat-utils__content">
        <label class="chat-utils__btn chat-utils__btn--photo">Фото или Видео
          <input type="file">
        </label>
        
        <label class="chat-utils__btn chat-utils__btn--file">Файл
          <input type="file">
        </label>
        
        <label class="chat-utils__btn chat-utils__btn--location">Локация
          <input type="file">
        </label>
      </div>
    </div>
    <button type="button" class="message-form__attach-file"></button>
    <input type="text" name="message" class="message-form__input" placeholder="Сообщение" required/>
    
    {{{button}}}
    
  </form>
`;
