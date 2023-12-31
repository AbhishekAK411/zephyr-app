import {
  Card,
  CardHeader,
  CardFooter,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

const Blogcard = ({data}) => {
  const router = useNavigate();

  const redirectToSingleBlog = (id) => {
    router(`/blog/${id}`);
  }
  return (
    <>
      <section className="w-[60%] flex flex-col items-center py-5 gap-y-5">
        <section className="w-[90%] h-[500px] flex items-center justify-center rounded-lg">
          <Card className="mt-6 w-[90%] shadow-stripe">
            <CardHeader color="blue-gray" className="relative h-56">
              <img src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" alt="card" />
            </CardHeader>
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                {data.title}
              </Typography>
              <Typography>
                {data.shortDescription}
              </Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <Button onClick={() => redirectToSingleBlog(data._id)}>Read More</Button>
            </CardFooter>
          </Card>
        </section>
      </section>
    </>
  );
};

export default Blogcard;
