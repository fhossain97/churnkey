import { Box, Typography } from "@mui/material";
import LocalMoviesIcon from "@mui/icons-material/LocalMovies";
import HomeIcon from "@mui/icons-material/Home";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import { type IconWithText } from "lib/types";
import AlignIconWithText from "./AlignIconWithText";
import Searchbar from "./Searchbar";

const style = `flex w-1/3 items-center text-red-500`;

const iconData: IconWithText[] = [
  {
    icon: <HomeIcon style={{ color: "f44336" }} />,
    externalLink: false,
    text: "Home",
    link: "/",
  },
  {
    icon: <SettingsSuggestIcon style={{ color: "f44336" }} />,
    externalLink: false,
    text: "Account",
    link: "/settings",
  },
];

export const Navbar = () => {
  return (
    <Box className="2 flex h-[6%] border border-solid border-red-500 bg-black">
      <Box className={`${style} justify-start pl-4`}>
        <LocalMoviesIcon />
        <Typography variant="h5">Netflix</Typography>
      </Box>
      {/* <Box className={`${style} justify-center`}>
        <Searchbar />
      </Box> */}
      <Box className={`${style} justify-end`}>
        <AlignIconWithText iconInfo={iconData} />
      </Box>
    </Box>
  );
};
