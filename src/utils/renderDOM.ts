export function render(query: string, block) {
  const root = document.querySelector(query) as HTMLElement;

  root.appendChild(block.getContent());

  return root;
}
