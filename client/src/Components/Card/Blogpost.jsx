import {Typography} from "@material-tailwind/react";

const Blogpost = ({post}) => {
    console.log(post);
  return (
    <>
      <div className="pl-10 pt-10 w-[95%] h-[95%]">
        <Typography variant="h3">Title</Typography>
        <Typography variant="h6" className="text-gray-500 mt-5 font-normal">
          Author
        </Typography>
        <Typography variant="h6" className="text-gray-500 font-normal">
          Timestamp
        </Typography>
        <Typography variant="paragraph" className="mt-10">
          Paragraph
        </Typography>
      </div>
    </>
  );
};

export default Blogpost;
