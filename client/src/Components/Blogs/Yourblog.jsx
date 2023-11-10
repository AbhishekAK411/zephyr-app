import { useContext, useEffect, useState } from "react";
import { authContext } from "../../Context/Authcontext";
import toast from "react-hot-toast";
import blogApi from "../../Utils/Blogconfig";
import Datanotfound from "../Errorpages/Datanotfound";
import Dedicatedblogcard from "../Card/Dedicatedblogcard";

const Yourblog = () => {
    const [userBlogs, setUserBlogs] = useState();
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
                        setUserBlogs(axiosResponse?.userBlogs);
                    }
                } catch (error) {
                    toast.error(error?.response?.data?.message);
                }
            }
            getUserBlogs();
        }
    }, [state?.user?._id]);

    console.log(userBlogs);
    return (
        <>
            <main className="w-full min-h-screen border-black border flex justify-center pt-10">
                <div className="w-[95%] h-full flex flex-wrap gap-x-5">
                    {userBlogs?.length ? (<>
                        {userBlogs?.map((blog, index) => (
                            <Dedicatedblogcard blog={blog} key={index} />
                        ))}
                    </>) : (<>
                        <Datanotfound />
                    </>)}
                </div>
            </main>
        </>
    )
}

export default Yourblog;