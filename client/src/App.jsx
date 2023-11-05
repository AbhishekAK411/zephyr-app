import {Route, Routes} from "react-router-dom";
import Home from "./Components/Home/Home";
import Createblog from "./Components/Blogs/Createblog";
import Pagenotfound from "./Components/Errorpages/Pagenotfound";


function App() {
  return (
    <>
      <Routes>
        <Route exact path="*" element={<Pagenotfound />} />
        <Route exact path="/" element={<Home />} />
        <Route exact path="/create/blog" element={<Createblog />} />
      </Routes>
    </>
  );
}

export default App;
