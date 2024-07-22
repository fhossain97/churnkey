import { Box } from "@mui/material";
import { Navbar } from "../Navbar/Navbar";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box className="h-screen w-screen">
      <Navbar />
      {children}
    </Box>
  );
};
