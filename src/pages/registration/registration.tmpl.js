export default `
  <div class="container">
    <section class="modal registration">
      <h1 class="registration__title">{{ title }}</h1>
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
