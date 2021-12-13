export default `
  <div class="avatar">
    {{#if isAvatar}} 
    <img src="" class="avatar__img">
    {{else}}
    <span class="avatar__img avatar__img--empty"></span>
    {{/if}}

    <div class="avatar__change">
      <span>Поменять аватар</span>
    </div>
  </div>
`;
