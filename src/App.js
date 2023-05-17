import { Routes, Route } from "react-router-dom";
import Navbar from "./Routes/Navbar/Navbar";
import Home from "./Components/Home/Home";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
};

export default App;
