export default `
  <div class="profile">
    <div class="profile__button-wrap">
      <a class="profile__link-back" href="/#chats"></a>
    </div>
    <section class="profile__content">
    
      <form action="" method="post">
        {{> avatar}}
                
        {{#if profileNotChange}}
        <p class="profile__name">{{name}}</p>
        {{/if}}
        
        <div class="profile__wrapper">
          {{#each inputProfile}}
            {{> inputProfile}}
          {{/each}} 
        </div>
      </form>
      
      {{#if profileNotChange}} 
      <ul class="profile__link-list">
        <li>
          <button class="link">Изменить данные</button>
        </li>
        <li>
          {{> link}} 
        </li>   
        <li>
          <button class="link link--alert">Выйти</button>
        </li>
      </ul>
      {{else}}
      {{> button}}
      {{/if}}

    </section>
  </div>
`;