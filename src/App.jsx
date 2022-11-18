import data from "./data";
import { Routes, Route } from "react-router-dom";
import Charts from "./pages/Charts";
import Aggregations from "./pages/Aggregations";
import Home from "./pages/Home";
import Links from "./pages/Links";
import { AppWrapper } from "./App.style";

const App = () => {
  return (
    <AppWrapper>
      <Links />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/charts" element={<Charts />} />
        <Route path="/aggregations" element={<Aggregations />} />
      </Routes>
    </AppWrapper>
  );
};

export default App;
