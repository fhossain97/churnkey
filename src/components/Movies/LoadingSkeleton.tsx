import { CircularProgress, Stack } from "@mui/material";
import { useRouter } from "next/router";

const LoadingSkeleton = () => {
  const router = useRouter();
  const { pathname } = router;

  return (
    <Stack
      spacing={2}
      className={`${pathname === "/search" ? "h-full" : "h - 1 / 4"} flex w-full items-center justify-center`}
    >
      <CircularProgress color="secondary" />
    </Stack>
  );
};

export default LoadingSkeleton;
