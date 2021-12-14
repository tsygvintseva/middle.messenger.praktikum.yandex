export default `
  {{#if isModal}}
  <div class="overlay">
    <div class="card avatar-modal">

      {{#if isUploaded}} 
      <p class="avatar-modal__title">Файл загружен</p>
      {{else}}
      <p class="avatar-modal__title">Загрузите файл</p>
      {{/if}}
      
      {{#if isUploadError}} 
      <p class="avatar-modal__title avatar-modal__title--error">Ошибка, попробуйте ещё раз</p>
      {{/if}}

      <form>
        <div class="avatar-modal__file">
          {{#if isUploaded}} 
          <span class="avatar-modal__file-name">{{fileName}}</span>
          {{else}}
          <label class="avatar-modal__file-choose">
            Выбрать файл на компьютере
            <input type="file" name="avatar">
          </label>
          {{/if}}
        </div>

        <div class="avatar-modal__button">
          <button class="button" type="submit">
            Поменять
          </button>
          
          {{#if isValidationError}} 
          <span class="avatar-modal__error">Нужно выбрать файл</span>
          {{/if}}
        </div>
      </form>
    </div>
  </div>
  {{/if}}
`;
