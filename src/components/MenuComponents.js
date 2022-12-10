import { Menu, MenuItem, } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import "../components/styles/style.css";

export default function MenuComponents() {
  return (
    <div className="menu_button">
      <Menu menuButton={<button className="btn-primary">Open menu</button>}>
        <MenuItem
          href="https://trends.google.com/trends/trendingsearches/daily?geo=US"
          target="_blank"
          rel="noopener noreferrer"
        >
          GOOGLE TRENDS (US)
        </MenuItem>
        <MenuItem
          href="https://top10.netflix.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          NETFLIX (US)
        </MenuItem>
        <MenuItem>Close Window</MenuItem>
      </Menu>
    </div>
  );
}

