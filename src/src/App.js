import TwitterTimeline from './components/TwitterTimeline';
import  DrawerAppBar from './components/DrawerAppBar';
import CustomizedTables from "./components/CustomizedTables";
import RedditMatome from "./components/RedditMatome";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App({Component, pageProps}) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DrawerAppBar />}>
          {" "}
        </Route>
        <Route path="twittertimeline" element={<TwitterTimeline />} />
        <Route path="booksrecommend" element={<CustomizedTables />} />
        <Route path="webforliving" element={<RedditMatome />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
