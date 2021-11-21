export default `
  <div class="message message--incoming {{#if isMessageImg}}message--img{{/if}}">
  
    {{#if isMessageText}}
    <div class="message__text">
      <p>
      {{messageText}}
      </p>
    </div>
    {{/if}}
    
    {{#if isMessageImg}}
    <div class="message__img">
      <img src="https://via.placeholder.com/150" alt="">
    </div>
    {{/if}}
    
    <span class="message__info">{{messageTime}}</span>
  </div>
`;
