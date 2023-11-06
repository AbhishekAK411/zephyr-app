import { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useParams } from "react-router-dom";
import blogApi from "../../Utils/Blogconfig";
import { authContext } from "../../Context/Authcontext";

const Singleblog = () => {
    const [singleBlogData, setSingleBlogData] = useState();
    const {id} = useParams();
    const {state} = useContext(authContext);
    
    useEffect(() => {
        const getSingleBlogData = async() => {
            try {
                const response = await blogApi.post("/", {
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
    }, [state?.user?._id, id]);

    
    return (
        <>
            <section className="w-full min-h-screen border-black border">

            </section>
        </>
    )
}

export default Singleblog;