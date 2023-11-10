import { useContext, useEffect, useState } from "react";
import { authContext } from "../../Context/Authcontext";
import toast from "react-hot-toast";
import blogApi from "../../Utils/Blogconfig";

const Yourblog = () => {
    const [userBlogs, setuserBlogs] = useState();
    const {state} = useContext(authContext);

    useEffect(() => {
        if(state?.user?._id){
            const getUserBlogs = async() => {
                try {
                    const response = await blogApi.post("/getUserBlogs", {
                        userId: state?.user?._id,
                    });

                    const axiosResponse = response?.data;
                    if(axiosResponse?.success){
                        setuserBlogs(axiosResponse?.userBlogs);
                    }
                } catch (error) {
                    toast.error(error?.response?.data?.message);
                }
            }
        }
    }, [state?.user?._id]);
    return (
        <>
            <main className="w-full min-h-screen border-black border">
                <div className="w-[95%] h-full border-black border"></div>
            </main>
        </>
    )
}

export default Yourblog;