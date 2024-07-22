import { Box, Typography } from "@mui/material";
import { type MovieData } from "lib/types";
import { Layout } from "~/components/Layout/Layout";
import LoadingSkeleton from "~/components/Movies/LoadingSkeleton";
import MoviesList from "~/components/Movies/MoviesList";
import { api } from "~/utils/api";

export default function Home({ search }: { search: boolean }) {
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

  return (
    <Layout>
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
    </Layout>
  );
}
