import {Button, Dialog, DialogHeader, DialogBody, DialogFooter} from "@material-tailwind/react";
import toast from "react-hot-toast";
import blogApi from "../../Utils/Blogconfig";

const Deletedialog = ({ openState, deleteBlogCallback, id, getBlogs }) => {
    
    //* Function to delete the particular blog using ID as params.
    const confirmDeletionBlog = async() => {
        try {
            const response = await blogApi.delete(`/delete/${id}`);
            const axiosResponse = response?.data;
            if(axiosResponse?.success){
                deleteBlogCallback();
                getBlogs();
                toast.success(axiosResponse?.message);
            }
        } catch (error) {
            toast.error(error?.response?.data.message);
        }
    }
    return (
        <>
            <Dialog open={openState} handler={deleteBlogCallback}>
                <DialogHeader>Confirmation</DialogHeader>
                <DialogBody>Are you sure you want to delete the blog?</DialogBody>
                <DialogFooter>
                    <Button onClick={deleteBlogCallback} variant="text" color='red' className="mr-1">cancel</Button>
                    <Button onClick={confirmDeletionBlog} variant="gradient" color="green">
                        <span>confirm</span>
                    </Button>
                </DialogFooter>
            </Dialog>
        </>
    )
}

export default Deletedialog;