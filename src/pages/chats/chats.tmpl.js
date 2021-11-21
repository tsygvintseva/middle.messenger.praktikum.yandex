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
    <div class="">
    
    </div>
  </section>
`;
