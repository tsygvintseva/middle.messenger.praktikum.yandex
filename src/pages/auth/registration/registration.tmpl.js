export default `
  <div class="container">
    <section class="modal auth">
      <h1 class="auth__title">{{ title }}</h1>
      <form action="" method="post" class="form">
      
        <div class="form__content">
          {{#each input}}
            {{> input }}
          {{/each}} 
        </div>
 
        <div class="form__btns">
          {{> button }}
          {{> link }}
        </div>
        
      </form>
    </section>
   </div>
`;
