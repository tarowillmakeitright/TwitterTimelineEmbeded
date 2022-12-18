import TwitterTimeline from './components/TwitterTimeline';
import MenuComponents from './components/MenuComponents'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MenuComponents />}></Route>
        <Route path="twittertimeline" element={<TwitterTimeline />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
