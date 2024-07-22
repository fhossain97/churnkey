import { Box, Typography } from "@mui/material";
import { type MovieData } from "lib/types";
import { useState } from "react";
import { Layout } from "~/components/Layout/Layout";
import MoviesList from "~/components/Movies/MoviesList";
import { api } from "~/utils/api";

export default function SearchPage({
  search,
  query,
}: {
  search: boolean;
  query: string;
}) {
  const [data, setData] = useState<MovieData[]>([]);

  const results = api.movie.searchMovieUsingQuery.useMutation();

  if (query && search) {
    results.mutate(
      {
        endpoint: "movie",
        text: query,
      },
      { onSuccess: (result) => setData(result) },
    );
  }

  return (
    <Layout>
      {search && data.length > 0 ? (
        <Box className="p3">
          <MoviesList title="Results" data={data} search={search} />
        </Box>
      ) : (
        <Box className="flex items-center justify-center">
          <Typography variant="h4">No movies found. Try again!</Typography>
        </Box>
      )}
    </Layout>
  );
}
