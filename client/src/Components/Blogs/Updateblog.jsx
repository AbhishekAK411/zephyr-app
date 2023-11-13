import {motion} from "framer-motion";
import {useState, useEffect} from "react";
import {toast} from "react-hot-toast";
import { Input, Button, Typography } from "@material-tailwind/react";
import { useQuill } from "react-quilljs";
import 'quill/dist/quill.snow.css';
import { useParams } from "react-router-dom";

const Updateblog = () => {
    const {id} = useParams();
    const {quill, quillRef} = useQuill();

    useEffect(() => {
        
    }, []);
    const handleChange = (e) => {

    }

    const handleUpdateBlogSubmit = () => {

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
