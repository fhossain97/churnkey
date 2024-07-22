import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  /**
   * Specify your server-side environment variables schema here. This way you can ensure the app
   * isn't built with invalid env vars.
   */
  server: {
    NODE_ENV: z.enum(["development", "test", "production"]),
    TMDB_BASE_API_URL: z.string(),
    TMDB_READ_ONLY_TOKEN: z.string(),
    TMDB_API_KEY: z.string(),
    TMDB_BASE_SEARCH_URL: z.string(),
    CHURNKEY_API_KEY: z.string(),
  },

  /**
   * Specify your client-side environment variables schema here. This way you can ensure the app
   * isn't built with invalid env vars. To expose them to the client, prefix them with
   * `NEXT_PUBLIC_`.
   */
  client: {
    // NEXT_PUBLIC_CLIENTVAR: z.string(),
    NEXT_PUBLIC_TMDB_BASE_IMAGE_URL: z.string(),
    NEXT_PUBLIC_CHURNKEY_APP_ID: z.string(),
    NEXT_PUBLIC_CHURNKEY_CUSTOMER_ID: z.string(),
    NEXT_PUBLIC_LOCAL_URL: z.string(),
  },

  /**
   * You can't destruct `process.env` as a regular object in the Next.js edge runtimes (e.g.
   * middlewares) or client-side so we need to destruct manually.
   */
  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    TMDB_BASE_API_URL: process.env.TMDB_BASE_API_URL,
    TMDB_READ_ONLY_TOKEN: process.env.TMDB_READ_ONLY_TOKEN,
    TMDB_API_KEY: process.env.TMDB_API_KEY,
    TMDB_BASE_SEARCH_URL: process.env.TMDB_BASE_SEARCH_URL,
    NEXT_PUBLIC_TMDB_BASE_IMAGE_URL:
      process.env.NEXT_PUBLIC_TMDB_BASE_IMAGE_URL,
    CHURNKEY_API_KEY: process.env.CHURNKEY_API_KEY,
    NEXT_PUBLIC_CHURNKEY_APP_ID: process.env.NEXT_PUBLIC_CHURNKEY_APP_ID,
    NEXT_PUBLIC_CHURNKEY_CUSTOMER_ID:
      process.env.NEXT_PUBLIC_CHURNKEY_CUSTOMER_ID,
    NEXT_PUBLIC_LOCAL_URL: process.env.NEXT_PUBLIC_LOCAL_URL,
    // NEXT_PUBLIC_CLIENTVAR: process.env.NEXT_PUBLIC_CLIENTVAR,
  },
  /**
   * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially
   * useful for Docker builds.
   */
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,
  /**
   * Makes it so that empty strings are treated as undefined. `SOME_VAR: z.string()` and
   * `SOME_VAR=''` will throw an error.
   */
  emptyStringAsUndefined: true,
});
