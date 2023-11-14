import {motion} from "framer-motion";
import {useState, useEffect, useCallback, useContext} from "react";
import {toast} from "react-hot-toast";
import { Input, Button, Typography } from "@material-tailwind/react";
import { useQuill } from "react-quilljs";
import 'quill/dist/quill.snow.css';
import { useNavigate, useParams } from "react-router-dom";
import blogApi from "../../Utils/Blogconfig";
import { authContext } from "../../Context/Authcontext";

const Updateblog = () => {
    const [getSingleBlog, setGetSingleBlog] = useState();
    const [updateBlog, setUpdateBlog] = useState({title: getSingleBlog?.title, shortDescription: getSingleBlog?.shortDescription, description: getSingleBlog?.description});
    const {id} = useParams();
    const {state} = useContext(authContext);
    const {quill, quillRef} = useQuill();
    const router = useNavigate();

    const getBlogData = useCallback(async() => {
        try {
            const response = await blogApi.post("/getSingle", {
                userId: state?.user?._id,
                blogId: id
            });
            const axiosResponse = response?.data;
            if(axiosResponse?.success){
                setGetSingleBlog(axiosResponse?.singleBlog);
            }
        } catch (error) {
            toast.error(error?.response?.data?.message);
        }
    }, [id, state?.user?._id]);

    useEffect(() => {
        if(state?.user?._id){
            getBlogData();
        }
    }, [getBlogData, state?.user?._id]);

    useEffect(() => {
        if(quill){
          quill.on("text-change", () => {
            console.log(quillRef.current.firstChild.innerHTML);
            setUpdateBlog((prevData) => ({...prevData, description: quillRef.current.firstChild.innerHTML}));
          })
        }
      }, [quill,quillRef]);

    const handleChange = (e) => {
        setUpdateBlog({...updateBlog, [e.target.name]: e.target.value});
    }

    const handleUpdateBlogSubmit = async() => {
        try {
            const response = await blogApi.put(`/update/${id}`, {
                title: updateBlog?.title,
                shortDescription: updateBlog?.shortDescription,
                description: updateBlog?.shortDescription,
            });
            
            const axiosResponse = response?.data;
            if(axiosResponse?.success){
                toast.success(axiosResponse?.message);
                router("/bloglist");
            }
        } catch (error) {
            toast.error(error?.response?.data?.message);
        }
    }
    const updateBlogVariants = {
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1
        }
    }

    const transitions = {
        duration: 0.5
    }

  return (
    <>
      <motion.section
        variants={updateBlogVariants}
        initial="initial"
        animate="animate"
        transition={transitions}
        className="w-full min-h-screen flex justify-center"
      >
        <section className="w-[95%] py-5 flex flex-col gap-y-5">
          <Input
            onChange={handleChange}
            name="title"
            type="text"
            label="Title"
            variant="standard"
          />
          <Input
            onChange={handleChange}
            name="shortDescription"
            type="text"
            label="Short Description"
            variant="standard"
          />
          <div className="h-[600px] w-full">
            <div ref={quillRef} />
          </div>
          <section className="w-full h-[200px] border border-gray-500 border-dashed rounded-lg mt-10 flex flex-col items-center justify-center">
            <Typography>Dragon Drop</Typography>
            <label className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
              <span className="">Upload a file</span>
              <input
                onChange={handleChange}
                id="file-upload"
                name="fileUpload"
                type="file"
                className="sr-only"
              />
            </label>
          </section>
          <Button onClick={handleUpdateBlogSubmit} className="mt-10">
            Submit
          </Button>
        </section>
      </motion.section>
    </>
  );
};

export default Updateblog;
