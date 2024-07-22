import { Box, Typography } from "@mui/material";
import { type MovieData } from "lib/types";
import { useEffect, useState } from "react";
import { Layout } from "~/components/Layout/Layout";
import MoviesList from "~/components/Movies/MoviesList";
import Searchbar from "~/components/Navbar/Searchbar";
import { api } from "~/utils/api";

export default function SearchPage() {
  const [data, setData] = useState<MovieData[]>([]);
  const [search, setSearch] = useState<boolean>(false);
  const [input, setInput] = useState<string>("");

  const { data: results, isLoading: loadingResults } =
    api.movie.searchMovieUsingQuery.useQuery({
      endpoint: "movie",
      text: input,
    });

  if (!loadingResults) {
    <Box className="flex items-center justify-center">
      <Typography variant="h4">Loading...</Typography>
    </Box>;
  }

  useEffect(() => {
    if (search && !loadingResults) {
      setData(results ?? []);
      setSearch(false);
    }
  }, [search, loadingResults, results]);

  return (
    <Layout>
      <Box className="flex flex-col items-center justify-center text-red-500">
        <Typography className="mt-4" variant="h6">
          Search movies within the search box - results will populate below.
        </Typography>
        <Searchbar setInput={setInput} setSearch={setSearch} />
      </Box>

      {data && data.length > 0 ? (
        <Box className="p3">
          <MoviesList title="Results" data={data} />
        </Box>
      ) : (
        data.length === 0 && (
          <Box className="flex items-center justify-center">
            <Typography variant="h4">No movies found. Try again!</Typography>
          </Box>
        )
      )}
    </Layout>
  );
}
