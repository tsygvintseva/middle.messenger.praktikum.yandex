export default `
  <div class="profile">
    <div class="profile__button-wrap">
      <a class="profile__link-back" href="/#chats"></a>
    </div>
    <section class="profile__content">

      <form action="" method="post">
          {{> avatar}}
        
          <div class="profile__wrapper">
            {{#each inputProfile}}
              {{> inputProfile}}
            {{/each}} 
          </div>
      
        {{> button}}
      </form>

    </section>
  </div>
`;
