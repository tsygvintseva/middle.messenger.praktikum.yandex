export default `
  <section class="card auth">
    <h1 class="auth__title">{{title}}</h1>
    <form method="post" class="auth__form">
    
      <div class="auth__form-content">
        {{{email}}}
        {{{login}}}
        {{{firstName}}}
        {{{lastName}}}  
        {{{phone}}}
        {{{password}}}
        {{{passwordRepeat}}}
      </div>

      <div class="auth__form-btns">
        {{{button}}}
        <a href='/#login' class="link">Войти</a>
      </div>
      
    </form>
  </section>
`;
