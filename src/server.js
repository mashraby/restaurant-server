require("dotenv").config();
const { ApolloServer } = require("apollo-server");
const modules = require("./modules");
const contextMiddleware = require("./utils/contextMiddleware");

const PORT = process.env.PORT || 9000;

const server = new ApolloServer({
  modules,
  context: (ctx) => contextMiddleware(ctx),
});

server.listen(PORT).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
