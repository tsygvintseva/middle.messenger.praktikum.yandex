export default `
  <div class="profile">
    <div class="profile__button-wrap">
      <a class="profile__link-back" href="/#chats"></a>
    </div>
    <section class="profile__content">
    
      <form>
        {{{avatar}}}
                
        {{#if profileNotChange}}
        <p class="profile__name">{{name}}</p>
        {{/if}}
        
        <div class="profile__wrapper">
          {{{email}}}
          {{{login}}}
          {{{firstName}}}
          {{{lastName}}}
          {{{username}}}
          {{{phone}}}
        </div>
        
        {{{button}}}
      </form>

      {{#if profileNotChange}} 
      <ul class="profile__link-list">
        <li>
          <button class="link">Изменить данные</button>
        </li>
        <li>
           <a href="" class="link">Изменить пароль</a>
        </li>   
        <li>
          <button class="link link--alert">Выйти</button>
        </li>
      </ul>
    {{else}}
    
    {{/if}}
    
    </section>
  </div>
`;
