import { Box, Stack } from "@mui/material";
import { Link } from "react-router-dom";

import { logo } from "../utils/constants";
import { SearchBar } from "./";

const Navbar = () => (
  <Stack direction="row"  p={2} sx={{ position: "sticky", background: '#000', top: 0 }}>
    <Box sx={{ml:1}}>
      <Link to="/" style={{ display: "flex", alignItems: "center" }}>
        <img src={logo} alt="logo" height={45} />
      </Link>
    </Box>
    <Box sx={{ margin:"auto", width: {xs:230, sm: "auto"}}} >
      <SearchBar />
    </Box>
  </Stack>
);

export default Navbar;
