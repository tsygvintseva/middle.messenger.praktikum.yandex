export default `
  <div class="container error">
    <p class="error__code">{{ errorCode }}</p>
    <p class="error__desc"> {{ errorDesc }}</p>
    {{> link }}
  </div>
`;
