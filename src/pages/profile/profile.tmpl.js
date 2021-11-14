export default `
  <div class="profile">
    <div class="profile__button-wrap">
      <a class="profile__link-back" href="/#chats"></a>
    </div>
    <section class="profile__content">
    
      <form action="" method="post">
        {{> avatar}}
        <p class="profile__name">{{name}}</p>
        
        <div class="profile__wrapper">
          {{#each inputProfile}}
            {{> inputProfile}}
          {{/each}} 
        </div>
      </form>
      
      <ul class="profile__link-list">
        {{#each link}}
        <li>
          {{> link}} 
        </li>   
        {{/each}} 
        <li>
          <button class="link link--alert">Выйти</button>
        </li>
      </ul>

    </section>
  </div>
`;
