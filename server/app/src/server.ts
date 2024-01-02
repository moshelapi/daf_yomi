import express from "express";
import chalk from 'chalk';
import dotenv from 'dotenv';
import cors from "cors";
import { ApolloServer } from "@apollo/server";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import { client } from "./redis/redis.js";
import { WebSocketServer } from "ws";
import http from "http";
import { useServer } from "graphql-ws/lib/use/ws";
import { makeExecutableSchema } from "@graphql-tools/schema";
import resolvers from "./apolloServer/resolvers/users.resolver.js";
import { usersTypeDefs } from "./apolloServer/typeDefs/users.typeDeps.js";
import { expressMiddleware } from "@apollo/server/express4";
import { initializeDatabase } from "./postgres/initData.js";


dotenv.config();
const port = process.env.PORT || 4000;



const app = express();
app.use(express.json());
app.use(cors());

export const httpServer = http.createServer(app);

const wsServer = new WebSocketServer({
  server: httpServer,
  path: "/graphql",
});

const schema = makeExecutableSchema({
  typeDefs:usersTypeDefs,
  resolvers,
});

const serverCleanup = useServer({ schema }, wsServer);


const apolloServer = new ApolloServer({
  schema,
  plugins: [
    ApolloServerPluginDrainHttpServer({ httpServer }),
    {
      async serverWillStart() {
        return {
          async drainServer() {
            await serverCleanup.dispose();
          },
        };
      },
    },
  ],
});

async function startServer() {
    await apolloServer.start();
  
    app.use(
      "/graphql",
      expressMiddleware(apolloServer, {
        context: async ({ req }) => ({ token: req.headers.token }),
      })
    );
  
    httpServer.listen({ port: port }, () => {
  
      console.log(chalk.blueBright(`🚀 Server ready at http://localhost:4000/graphql`));
      client.connect()
      .then(() =>  console.log( chalk.magentaBright("connected successfully to Redis client!!! ")))
      .catch((error) => {  if (error instanceof Error) console.log(error.message) })})
      initializeDatabase();
    
    
  }
  
  startServer();


