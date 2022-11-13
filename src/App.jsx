import data from "./data";
import { Routes, Route } from "react-router-dom";
import Charts from "./pages/Charts";
import Aggregations from "./pages/Aggregations";
import Home from "./pages/Home";
import Links from "./pages/Links";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Links />}>
        <Route index element={<Home />} />
        <Route path="charts" element={<Charts />} />
        <Route path="aggregations" element={<Aggregations />} />
      </Route>
    </Routes>
  );
};

export default App;
