import { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useParams } from "react-router-dom";
import blogApi from "../../Utils/Blogconfig";
import { authContext } from "../../Context/Authcontext";
import {Typography} from "@material-tailwind/react";
import parse from "html-react-parser";

const Singleblog = () => {
  const [singleBlogData, setSingleBlogData] = useState();
  const [authorData, setAuthorData] = useState();
  const { id } = useParams();
  const { state } = useContext(authContext);

  //* This is to fetch single blog data from server.
  useEffect(() => {
    if (state?.user?._id && id) {
      const getSingleBlogData = async () => {
        try {
          const response = await blogApi.post("/getSingle", {
            userId: state?.user?._id,
            blogId: id,
          });
          const axiosResponse = response?.data;
          if (axiosResponse?.success) {
            setSingleBlogData(axiosResponse?.singleBlog);
            setAuthorData(axiosResponse?.author);
          }
        } catch (error) {
          toast.error(error?.response?.data?.message);
        }
      };
      getSingleBlogData();
    }
  }, [state?.user?._id, id]);

  let descriptionToDisplay = "";
  if(singleBlogData){
    descriptionToDisplay = parse(singleBlogData?.description);
  }
  return (
    <>
      <div className="w-full h-screen border-black border flex items-center justify-center">
        <div className="w-[95%] h-screen flex items-center justify-center">
          <div className="pl-10 pt-10 w-[95%] h-[95%]">
            <Typography variant="h3">{singleBlogData?.title}</Typography>
            <Typography variant="h6" className="text-gray-500 mt-5 font-normal">
              {authorData}
            </Typography>
            <Typography variant="h6" className="text-gray-500 font-normal">
              Timestamp
            </Typography>
            <Typography variant="paragraph" className="mt-10">
              {descriptionToDisplay}
            </Typography>
          </div>
        </div>
      </div>
    </>
  );
};

export default Singleblog;
