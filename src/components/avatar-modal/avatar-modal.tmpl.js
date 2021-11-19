export default `
  {{#if avatarModal}}
  <div class="overlay">
    <div class="card avatar__upload">

      {{#if avatarUpload}} 
      <p class="avatar__upload-title">Файл загружен</p>
      {{else}}
      <p class="avatar__upload-title">Загрузите файл</p>
      {{/if}}
      
      {{#if avatarUploadError}} 
      <p class="avatar__upload-title avatar__upload-title--error">Ошибка, попробуйте ещё раз</p>
      {{/if}}

      <form>
        <div class="avatar__upload-file">
          {{#if avatarUpload}} 
          <span>{{avatarFileName}}</span>
          {{else}}
          <label>
            Выбрать файл на компьютере
            <input type="file" name="avatar">
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
`;
