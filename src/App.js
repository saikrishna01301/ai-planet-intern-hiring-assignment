import { Routes, Route } from "react-router-dom";
import Navbar from "./Routes/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Form from "./Components/Form/Form";
import DataRelated from "./Components/DataRelated/DataRelated";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="form" element={<Form />} />
        <Route path="data-related-to-submission" element={<DataRelated />} />
      </Route>
    </Routes>
  );
};

export default App;
