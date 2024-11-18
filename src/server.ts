/**
 * @project Abstrax CTF Backend
 * @file src/server.ts
 * @description Server entry point
 * @author yemaster
 */
import fastify from "fastify";
import { initDb } from "@api/db";
import { env, Logger, Redis } from "@api/utils";


//const API_VERSION = "v1";

export const main = async () => {
    const app = fastify({
        logger: true,
        trustProxy: true,
    });

    await initDb();
    await Redis.initialize();

    app.get("/", async () => ({
        app: {
            name: "abxctf",
            version: {
                core: "0.0.1",
                ui: "0.0.1",
            },
        },
    }));

    app.listen({
        host: env.HOST,
        port: env.PORT
    }, (error, address) => {
        if (error) {
            Logger.error("INIT", error.message);
            throw new Error(error.message);
        }

        Logger.info("INIT", `Server listening on ${address}`);
    });

    return app;
};

main();