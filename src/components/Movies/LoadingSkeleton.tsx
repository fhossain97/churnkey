import { CircularProgress, Stack } from "@mui/material";

const LoadingSkeleton = ({ search }: { search: boolean }) => {
  return (
    <Stack
      spacing={2}
      className={`${search ? "h-full" : "h - 1 / 4"} flex w-full items-center justify-center`}
    >
      <CircularProgress color="secondary" />
    </Stack>
  );
};

export default LoadingSkeleton;
