import {Route, Routes} from "react-router-dom";
import Home from "./Components/Home/Home";
import Createblog from "./Components/Blogs/Createblog";


function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/test" element={<Createblog />} />
      </Routes>
    </>
  );
}

export default App;
