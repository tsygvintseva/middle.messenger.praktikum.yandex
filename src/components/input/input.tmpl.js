export default `
  <div class="field">
    <input class="field__input" type="{{ type }}" name="{{ name }}" id="{{ name }}" required>
    <label class="field__label" for="{{ name }}">{{ label }}</label>
    <span class="field__error">{{ validationError }}</span>
  </div>
`;
