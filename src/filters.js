/** Parse JSON recursively and remove unwanted items
 *
 * Shared between all filters
 * 
 */

const recurFilter = (node, parentArr, filter) => {
  console.log('node:', node)
  if (node.name == undefined) return
  const newObj = { name: node.name, children: [], id: node.id, props: node.props, state: node.state, methods: node.methods }

  if (filter.includes(node.name)) {
    if (Array.isArray(node.children)) {
      node.children.forEach(child => {
        recurFilter(child, parentArr, filter);
      });
    }
  }

  else {
    parentArr.push(newObj);
    if (Array.isArray(node.children)) {
      node.children.forEach(child => {
        recurFilter(child, newObj.children, filter);
      });
    }
  }
}

/** Removes Redux components from tree */
export function filterRedux(data) {
  const filtered = []
  const names = ['Provider', 'Connect'];
  recurFilter(data, filtered, names)
  return filtered[0];
}

/** Removes ReactRouter v4 components from JSON */
export function filterRouter(data) {
  const filtered = []
  const names = ['BrowserRouter', 'Router', 'Switch', 'Route', 'Link', 'StaticRouter', 'NavLink', 'Redirect', 'MemoryRouter', 'Prompt', 'NavLink'];
  recurFilter(data, filtered, names)
  return filtered[0];
}

/** Removes Basic DOM components from tree */
export function filterDOM(data) {
  console.log('data: ', data)
  const filtered = []
  const names = ['p', 'a', 'div', 'li', 'ul', 'input', 'button', 'h1', 'h2', 'h3', 'h4', 'br', 'img', 'form'];
  recurFilter(data, filtered, names)
  console.log('filtered:', filtered[0])
  return filtered[0];
}
