export default `
  <div class="field input-field-js">
    <input class="field__input input-js" type="{{type}}" name="{{name}}" id="{{name}}" {{#if required}} required {{/if}}>
    <label class="field__label" for="{{name}}">{{label}}</label>
    <span class="field__error input-error-js"></span>
  </div>
`;
