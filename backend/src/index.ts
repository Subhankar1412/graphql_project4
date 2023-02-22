import { ApolloServer } from "apollo-server-express";
import expres from "express";
import schema from "./graphql/schemasMap";

const createApollloServer = async () => {
    const PORT = 4000;
    const app = expres();
    const server = new ApolloServer({
        schema,
    });

    await server.start();
    server.applyMiddleware({ app });
    app.listen(PORT, () => {
        console.log(`Server is running at port no ${PORT}...`);
    });

}

createApollloServer();