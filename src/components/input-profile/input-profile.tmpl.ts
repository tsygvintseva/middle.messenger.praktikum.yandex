export default `
  <label class="input-profile input-field-js">
    <span>{{label}}</span>
    <input type="{{type}}" class="input-js" name="{{name}}" value="{{value}}" {{#if disabled}} disabled {{/if}}">
    <span class="input-profile__error input-error-js"></span>
  </label>
`;
