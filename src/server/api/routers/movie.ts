import { TMDB } from "lib/helper";
import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const movieRouter = createTRPCRouter({
  getMovieListByEndpoint: publicProcedure
    .input(z.object({ endpoint: z.string() }))
    .query(async ({ input }) => {
      const { endpoint } = input;
      const req = await TMDB(String(process.env.TMDB_BASE_API_URL), endpoint);
      return req;
    }),

  searchMovieUsingQuery: publicProcedure
    .input(z.object({ text: z.string(), endpoint: z.string() }))
    .query(async ({ input }) => {
      const { text, endpoint } = input;
      const req = await TMDB(
        String(process.env.TMDB_BASE_SEARCH_URL),
        endpoint,
        text,
      );
      return req;
    }),
});
