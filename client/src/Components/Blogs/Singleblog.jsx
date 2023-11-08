import { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useParams } from "react-router-dom";
import blogApi from "../../Utils/Blogconfig";
import { authContext } from "../../Context/Authcontext";
import Blogpost from "../Card/Blogpost";

const Singleblog = () => {
    const [singleBlogData, setSingleBlogData] = useState();
    const {id} = useParams();
    const {state} = useContext(authContext);
    
    //* This is to fetch single blog data from server.
    useEffect(() => {
        if(state?.user?._id){
            const getSingleBlogData = async() => {
                try {
                    const response = await blogApi.post("/getSingle", {
                        userId: state?.user?._id,
                        blogId: id
                    });
                    const axiosResponse = response?.data;
                    if(axiosResponse?.success){
                        setSingleBlogData(axiosResponse.singleBlog);
                    }
                } catch (error) {
                    toast.error(error?.response?.data?.message);
                }
            }
            getSingleBlogData();
        }
    }, [state?.user?._id, id]);

    return (
        <>
            <div className="w-full h-screen border-black border flex items-center justify-center">
                <div className="w-[95%] h-screen flex items-center justify-center">
                    <Blogpost post={singleBlogData} />
                </div>
            </div>
        </>
    )
}

export default Singleblog;