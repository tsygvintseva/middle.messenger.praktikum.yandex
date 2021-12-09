export default `
  <section class="card auth">
    <h1 class="auth__title">{{title}}</h1>
    <form method="post" class="auth__form">
    
      <div class="auth__form-content">
        {{{login}}}  
        {{{password}}}
      </div>

      <div class="auth__form-btns">
        {{{button}}}
        <a href="/#registration" class="link">Нет аккаунта?</a>
      </div>
      
    </form>
  </section>
`;
