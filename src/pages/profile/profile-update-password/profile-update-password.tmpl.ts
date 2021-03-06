export default `
  <div class="profile">
    <div class="profile__button-wrap">
      <a class="profile__link-back" href="/#chats"></a>
    </div>
    <section class="profile__content">
    
      <form>
        {{{avatar}}}
        
        <div class="profile__wrapper profile__wrapper--password">
          {{{oldPassword}}}
          {{{password}}}
          {{{confirmPassword}}}
        </div>
        
        {{{button}}}
      </form>
    </section>
  </div>
`;
