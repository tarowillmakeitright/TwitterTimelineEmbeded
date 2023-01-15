import { Menu, MenuItem, } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import "../components/styles/style.css";
import {Outlet, Link } from "react-router-dom";


export default function MenuComponents() {
  return (
    <div className="container">
      <div className="centered">
        <h1>LIL JAP KID</h1>
        <Menu menuButton={<button className="btn-primary">Open menu</button>}>
          <MenuItem
            href="https://trends.google.com/trends/trendingsearches/daily?geo=US"
            rel="noopener noreferrer"
          >
            GOOGLETRENDS
          </MenuItem>
          <MenuItem href="https://top10.netflix.com/" rel="noopener noreferrer">
            NETFLIX
          </MenuItem>
          <MenuItem
            href="https://www.amazon.co.jp/-/en/gp/movers-and-shakers/digital-text/ref=zg_bsms_nav_books_0/"
            rel="noopener noreferrer"
          >
            AMAZONRANKINGS
          </MenuItem>
          <MenuItem
            href="https://redditmatome.vercel.app/"
            rel="noopener noreferrer"
          >
            BLOGS
          </MenuItem>
          <MenuItem>
            <Link to="/twittertimeline">Twitter</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/booksrecommend">Book recommendations</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/webforliving">Web For Living</Link>
          </MenuItem>
          <MenuItem>Close Window</MenuItem>
        </Menu>

        <Outlet />
      </div>
    </div>
  );
}

