import {IconButton,Input,Typography,Button} from "@material-tailwind/react";

const Createblog = () => {
  return (
    <>
      <section className="w-[600px] z-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[500px] flex items-center justify-center">
        <section className="absolute right-8 top-6">
          <IconButton
            variant="text"
            className="rounded-full text-base"
          >
            <i className="fa fa-times" aria-hidden="true"></i>
          </IconButton>
        </section>
        <section className="w-[95%] bg-white h-[95%] pt-14 border rounded-xl px-5 gap-y-5 flex flex-col items-center shadow-2xl">
          <Typography variant="h2" className="text-[#800000]"> New Blog </Typography>
          <Input label="Title" type="text" className="focus:border-gray-900 text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow" />
          <Input label="Description" type="text" className="focus:border-gray-900  text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow" />
          <section className="w-full border-gray-500 border rounded-lg border-dashed h-[35%] flex flex-col items-center justify-center">
            <Typography>Drag'n Drop</Typography>
            <label className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
              <span className="">Upload</span>
              <input
                id="file-upload"
                name="fileUpload"
                type="file"
                className="sr-only"
              />
            </label>
          </section>
          <Button>Submit</Button>
        </section>
      </section>
    </>
  );
};

export default Createblog;
