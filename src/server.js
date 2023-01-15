import http from "node:http";

import { json } from "./middlewares/json.js";
import { routes } from "./routes.js";

// Query Parameters: URL Stateful => filtros, paginação
//                             query parameters
// http://localhost:30000/users?userId=1

// Router Parameters: Identificação de recurso
// GET http://localhost:30000/users/1
// DELETE http://localhost:30000/users/1

// Request Body: Envio de informações de formulário (HTTPs)
// POST http://localhost:30000/users

const server = http.createServer(async (req, res) => {
  const { method, url } = req;

  await json(req, res)

  const route = routes.find(route => {
    return route.method === method && route.path.test(url);
  });

  if (route) {
    return route.handler(req, res);
  }

  return res.writeHead(404).end();
})

server.listen(3000, () => {
  console.log("Server listening on port 3000")
})
