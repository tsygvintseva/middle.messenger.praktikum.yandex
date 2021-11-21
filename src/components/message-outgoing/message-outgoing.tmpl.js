export default `
  <div class="message message--outgoing {{#if isMessageImg}}message--img{{/if}}">
  
    {{#if isMessageText}}
    <div class="message__text">
      <p>
      {{messageText}}
      </p>
    </div>
    {{/if}}
    
    {{#if isMessageImg}}
    <div class="message__img">
      <img src="" alt="">
    </div>
    {{/if}}
    
    <span class="message__info {{#if isMessageRead}} message__info--read {{else}} message__info--delivered {{/if}}">
      {{messageTime}}
    </span>
  </div>
`;
