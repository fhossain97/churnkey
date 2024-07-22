import { Box, Typography } from "@mui/material";

const DisplayInfo = ({
  infoName,
  info,
}: {
  infoName: string;
  info: string;
}) => {
  return (
    <Box className="flex items-center justify-start">
      {" "}
      <Typography variant="h6" className="mr-2">
        {infoName}:
      </Typography>
      <Typography variant="h6" className="font-medium">
        {info}
      </Typography>
    </Box>
  );
};

export default DisplayInfo;
