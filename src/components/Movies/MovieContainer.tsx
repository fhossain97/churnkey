import { type MovieData } from "lib/types";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";

const MovieContainer = ({ data }: { data: MovieData }) => {
  const { original_title, overview, poster_path } = data;
  return (
    <Card className="relative w-[23%] transition-shadow duration-300 ease-in-out hover:shadow-lg">
      <CardMedia
        sx={{ height: 140 }}
        image={`${process.env.NEXT_PUBLIC_TMDB_BASE_IMAGE_URL}${poster_path}`}
        title={original_title}
      />
      <CardContent
        sx={{ textAlign: "center", height: 100, overflow: "auto" }}
        className="bg-red-500 text-red-500"
      >
        <Typography gutterBottom variant="h5" component="div" color="black">
          {original_title}
        </Typography>
        <Box className="absolute inset-0 flex flex-wrap items-center justify-center overflow-auto bg-black bg-opacity-60 p-1 text-white opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-100">
          <Typography variant="caption">{original_title}</Typography>
          <Typography variant="caption">{overview}</Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default MovieContainer;
