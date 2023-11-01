import { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { authContext } from "../../Context/Authcontext";
import Navbar from "../Global/Navbar";
import Navigation from "../Global/Navigation";
import Register from "../User/Register";
import api from "../../Utils/Axiosconfig";

const Home = () => {
  const [blogData, setBlogData] = useState([]);
  const [userRender, setUserRender] = useState(false);
  const { state } = useContext(authContext);

  // fetching blog data and storing it in a state.
  useEffect(() => {
    const getBlogs = async () => {
      try {
        const response = await api.post("/getBlogs", {
          userId: state?.user?._id,
        });
        const axiosResponse = response?.data;
        if (axiosResponse?.success) {
          setBlogData(axiosResponse.blogs);
        }
      } catch (error) {
        toast.error(error?.response?.data?.message);
      }
    };
  }, [state?.user?._id]);

  const handleRenderState = () => {
    setUserRender((prev) => !prev);
  };
  return (
    <>
      {!userRender && <Navbar onLoginToggle={handleRenderState} />}
      {!userRender && <Navigation />}
      <main className="w-full min-h-screen">
        {userRender && <Register onRegisterToggle={handleRenderState} />}
        <section className="mt-12 w-full flex items-center justify-center min-h-screen">
          <section className="w-[60%] border-black border"></section>
        </section>
      </main>
    </>
  );
};

export default Home;
