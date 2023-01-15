// /users/:id
export function buildRoutePath(path) {
  const routeParametersRegex = /:([a-zA-Z]+)/g
  const pathWithParams = path.replaceAll(routeParametersRegex, "([a-z0-9\-_]+)");

  // console.log(Array.from(path.matchAll(routeParametersRegex)));
  const pathRegex = new RegExp(`^${pathWithParams}`);

  return pathRegex;
}