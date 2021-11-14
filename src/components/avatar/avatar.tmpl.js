export default `
  <div class="avatar">
  
    {{#if avatar}} 
    <img src="" class="avatar__img">
    {{else}}
    <span class="avatar__img avatar__img--empty"></span>
    {{/if}}

    <div class="avatar__change">
      <span>Поменять аватар</span>
    </div>
    
    {{#if avatarModal}}
    <div class="overlay">
      <div class="modal avatar__upload">

        {{#if avatarUpload}} 
        <p class="avatar__upload-title">Файл загружен</p>
        {{else}}
        <p class="avatar__upload-title">Загрузите файл</p>
        {{/if}}
        
        {{#if avatarUploadError}} 
        <p class="avatar__upload-title avatar__upload-title--error">Ошибка, попробуйте ещё раз</p>
        {{/if}}

        <form action="" method="post">
          <div class="avatar__upload-file">
            {{#if avatarUpload}} 
            <span>{{avatarFileName}}</span>
            {{else}}
            <label>
              Выбрать файл на компьютере
              <input type="file">
            </label>
            {{/if}}
          </div>

          <div class="avatar__upload-button">
            <button class="button" type="submit">
              Поменять
            </button>
            
            {{#if avatarValidationError}} 
            <span class="avatar__upload-error">Нужно выбрать файл</span>
            {{/if}}
          </div>
        </form>
      </div>
    </div>
    {{/if}}
    
  </div>
`;
