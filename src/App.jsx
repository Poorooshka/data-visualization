import { Routes, Route } from "react-router-dom";
import Charts from "./pages/charts";
import Aggregations from "./pages/aggregations";
import Home from "./pages/home";
import Links from "./layout/links";
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
