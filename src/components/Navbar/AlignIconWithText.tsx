import {
  Box,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { type IconWithText } from "lib/types";
import Link from "next/link";

const AlignIconWithText = ({ iconInfo }: { iconInfo: IconWithText[] }) => {
  return (
    <Box className="flex">
      {iconInfo.map(({ icon, text, link, externalLink }, index) => (
        <Link key={index} href={link} target={externalLink ? "_blank" : ""}>
          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton>
              <Box className="flex items-center justify-center">
                {" "}
                <ListItemIcon sx={{ minWidth: 0.3 }}>{icon}</ListItemIcon>
                <ListItemText primary={<Typography>{text}</Typography>} />
              </Box>
            </ListItemButton>
          </ListItem>
        </Link>
      ))}
    </Box>
  );
};

export default AlignIconWithText;
