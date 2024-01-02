var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
    typeDefs: usersTypeDefs,
    resolvers,
});
const serverCleanup = useServer({ schema }, wsServer);
const apolloServer = new ApolloServer({
    schema,
    plugins: [
        ApolloServerPluginDrainHttpServer({ httpServer }),
        {
            serverWillStart() {
                return __awaiter(this, void 0, void 0, function* () {
                    return {
                        drainServer() {
                            return __awaiter(this, void 0, void 0, function* () {
                                yield serverCleanup.dispose();
                            });
                        },
                    };
                });
            },
        },
    ],
});
function startServer() {
    return __awaiter(this, void 0, void 0, function* () {
        yield apolloServer.start();
        app.use("/graphql", expressMiddleware(apolloServer, {
            context: ({ req }) => __awaiter(this, void 0, void 0, function* () { return ({ token: req.headers.token }); }),
        }));
        httpServer.listen({ port: port }, () => {
            console.log(chalk.blueBright(`🚀 Server ready at http://localhost:4000/graphql`));
            client.connect()
                .then(() => console.log(chalk.magentaBright("connected successfully to Redis client!!! ")))
                .catch((error) => { if (error instanceof Error)
                console.log(error.message); });
        });
        initializeDatabase();
    });
}
startServer();
//# sourceMappingURL=server.js.map