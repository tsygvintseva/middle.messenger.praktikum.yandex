export default `
  <button class="button {{#if isMessageForm}}button--message-form{{/if}} type="{{buttonType}}">
    {{buttonText}}
  </button>
`;
