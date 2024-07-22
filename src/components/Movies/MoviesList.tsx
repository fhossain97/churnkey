import { useState } from "react";
import { Box, Stack, Typography, IconButton } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import MovieContainer from "./MovieContainer"; // Assuming this is your component
import { type MovieData } from "lib/types";

const MoviesList = ({
  data,
  title,
  search,
}: {
  data: MovieData[] | undefined;
  title: string;
  search: boolean;
}) => {
  const [page, setPage] = useState<number>(1);
  const totalPages = data ? Math.ceil(data.length / 4) : 0;

  const handleNext = () => {
    if (page < totalPages) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrev = () => {
    if (page > 1) {
      setPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <Stack
      spacing={2}
      className={`${search ? "h-full" : "h - 1 / 4"} w-full border-solid border-red-500`}
    >
      <Typography variant="h5" className="p-2 text-red-500">
        {title}
      </Typography>
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <IconButton
          onClick={handlePrev}
          disabled={page === 1}
          sx={{ fontSize: "40px" }}
        >
          <ArrowBackIosIcon fontSize="inherit" style={{ color: "f44336" }} />
        </IconButton>
        <Box
          sx={{ display: "flex", justifyContent: "space-evenly", flexGrow: 1 }}
        >
          {data && data.length > 0 ? (
            data
              .slice((page - 1) * 4, page * 4)
              .map((movie) => <MovieContainer key={movie.id} data={movie} />)
          ) : (
            <Box className="flex items-center justify-center">
              <Typography variant="h4">No movies found</Typography>
            </Box>
          )}
        </Box>
        <IconButton
          onClick={handleNext}
          disabled={page === totalPages}
          sx={{ fontSize: "40px" }}
        >
          <ArrowForwardIosIcon fontSize="inherit" style={{ color: "f44336" }} />
        </IconButton>
      </Box>
    </Stack>
  );
};

export default MoviesList;
