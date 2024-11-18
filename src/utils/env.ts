/* eslint-disable @typescript-eslint/naming-convention */
import { z } from "zod";
// eslint-disable-next-line import/no-unassigned-import
import "dotenv/config";

import { database, server } from "../../config.json";

const envSchema = z.object({
    DATABASE_URL: z.string().default(database.postgres),
    REDIS_URL: z.string().default(database.redis),
    PORT: z.coerce.number().default(server.port),
    HOST: z.string().default(server.host),
});

export const env = envSchema.parse(process.env);