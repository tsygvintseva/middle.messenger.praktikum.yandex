export function render(query: string, block: any) {
  const root = document.querySelector(query) as HTMLElement;
  if (root.firstChild) {
    root.removeChild(root.firstChild);
  }
  root.appendChild(block.getContent());

  return root;
}
