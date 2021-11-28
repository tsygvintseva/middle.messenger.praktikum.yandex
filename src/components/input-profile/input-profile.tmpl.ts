export default `
  <label class="input-profile">
    <span>{{label}}</span>
    <input type="{{type}}" value="{{value}}"{{#if disabled}} disabled {{/if}}">
  </label>
`;
