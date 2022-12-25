import TwitterTimeline from './components/TwitterTimeline';
import  DrawerAppBar from './components/DrawerAppBar';
import CustomizedTables from "./components/CustomizedTables";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DrawerAppBar />}></Route>
        <Route path="twittertimeline" element={<TwitterTimeline />} />
        <Route path="booksrecommend" element={<CustomizedTables />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
