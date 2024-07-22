import { Box, Typography } from "@mui/material";
import { type MovieData } from "lib/types";
import { Layout } from "~/components/Layout/Layout";
import LoadingSkeleton from "~/components/Movies/LoadingSkeleton";
import MoviesList from "~/components/Movies/MoviesList";
import { api } from "~/utils/api";

export default function Home({
  search,
  searchResults,
}: {
  search: boolean;
  searchResults: MovieData[];
}) {
  const { data: currentMovies, isLoading: loadingCurrent } =
    api.movie.getMovieListByEndpoint.useQuery({
      endpoint: "now_playing",
    });
  const { data: popular, isLoading: loadingPopular } =
    api.movie.getMovieListByEndpoint.useQuery({
      endpoint: "popular",
    });
  const { data: topRated, isLoading: loadingTopRated } =
    api.movie.getMovieListByEndpoint.useQuery({
      endpoint: "top_rated",
    });
  const { data: upcoming, isLoading: loadingUpcoming } =
    api.movie.getMovieListByEndpoint.useQuery({
      endpoint: "upcoming",
    });

  if (loadingCurrent || loadingPopular || loadingTopRated || loadingUpcoming) {
    return <LoadingSkeleton search={search} />;
  }

  // if (!searchResults) {
  //   return (
  //     <Box className="flex items-center justify-center">
  //       <Typography variant="h4">No movies found. Try again!</Typography>
  //     </Box>
  //   );
  // }

  return (
    <Layout>
      {/* {searchResults && searchResults.length > 0 ? (
        <Box className="p3">
          <MoviesList title="Results" data={searchResults} search={search} />
        </Box>
      ) : ( */}
      <Box className="p3">
        <MoviesList
          title="Now Playing In Theaters"
          data={currentMovies}
          search={search}
        />
        <MoviesList title="Popular Movies" data={popular} search={search} />
        <MoviesList title="Top Rated Movies" data={topRated} search={search} />
        <MoviesList title="Upcoming Movies" data={upcoming} search={search} />
      </Box>
      {/* )} */}
    </Layout>
  );
}
