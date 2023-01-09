// import { Menu, MenuItem, } from "@szhsin/react-menu";
// import "@szhsin/react-menu/dist/index.css";
// import "@szhsin/react-menu/dist/transitions/slide.css";
import "../components/styles/style.css";
// import TwitterIcon from "@mui/icons-material/Twitter";
import {Outlet, Link } from "react-router-dom";
import "@fontsource/knewave";

// export default function MenuComponents() {
//   return (
//     <div className="container">
//       <div className="centered">
//         <h1>LIL JAP KID</h1>
//         <Menu menuButton={<button className="btn-primary">Open menu</button>}>
//           <MenuItem
//             href="https://trends.google.com/trends/trendingsearches/daily?geo=US"
//             rel="noopener noreferrer"
//           >
//             GOOGLETRENDS
//           </MenuItem>
//           <MenuItem href="https://top10.netflix.com/" rel="noopener noreferrer">
//             NETFLIX
//           </MenuItem>
//           <MenuItem
//             href="https://www.amazon.co.jp/-/en/gp/movers-and-shakers/digital-text/ref=zg_bsms_nav_books_0/"
//             rel="noopener noreferrer"
//           >
//             AMAZONRANKINGS
//           </MenuItem>
//           <MenuItem>
//             <Link to="/twittertimeline">Twitter</Link>
//             <TwitterIcon />
//           </MenuItem>
//           <MenuItem>
//             <Link to="/booksrecommend">Book recommendations</Link>
//           </MenuItem>
//           <MenuItem>Close Window</MenuItem>
//         </Menu>

//         <Outlet />
//       </div>
//     </div>
//   );
// }

import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const drawerWidth = 240;
const navItems = [
<Link to="/">Home</Link>,
  <a href="https://trends.google.com/trends/trendingsearches/daily?geo=US">
    Google Trends
  </a>,
  <a href ="https://top10.netflix.com/">Netflix Ranking</a>,
  <a href ="https://www.amazon.co.jp/-/en/gp/movers-and-shakers/digital-text/ref=zg_bsms_nav_books_0/">
    Amazon Ranking
  </a>,
  <a href= "http://redditmatome.vercel.app">Blogs</a>,
  <Link to="/booksrecommend">Book recommendations</Link>,
  <Link to="/twittertimeline">Twitter</Link>,
  <Outlet />,
];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MENU
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            MENU
          </Typography>

          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: "#fff" }}>
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        <Typography>
          <div className="centered">
            <h1>LIL JAP KID</h1>
          </div>
        </Typography>
      </Box>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;
