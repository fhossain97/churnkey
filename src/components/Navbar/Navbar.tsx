import { Box, Typography } from "@mui/material";
import LocalMoviesIcon from "@mui/icons-material/LocalMovies";
import HomeIcon from "@mui/icons-material/Home";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import { type IconWithText } from "lib/types";
import AlignIconWithText from "./AlignIconWithText";
import Searchbar from "./Searchbar";
import SearchIcon from "@mui/icons-material/Search";
import { useRouter } from "next/router";

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
  {
    icon: <SearchIcon style={{ color: "f44336" }} />,
    externalLink: false,
    text: "Search",
    link: "/search",
  },
];

export const Navbar = () => {
  const router = useRouter();

  const { pathname } = router;

  const style = `flex ${pathname !== "/search" ? "w-1/2" : "w-1/3"} items-center text-red-500`;

  return (
    <Box className="2 flex h-[6%] border border-solid border-red-500 bg-black">
      <Box className={`${style} justify-start pl-4`}>
        <LocalMoviesIcon />
        <Typography variant="h5">Netflix</Typography>
      </Box>
      {pathname === "/search" ? (
        <Box className={`${style} justify-center`}>
          <Searchbar />
        </Box>
      ) : null}
      <Box className={`${style} justify-end`}>
        <AlignIconWithText iconInfo={iconData} />
      </Box>
    </Box>
  );
};
