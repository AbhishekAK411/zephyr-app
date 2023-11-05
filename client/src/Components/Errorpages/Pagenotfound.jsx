import { Button, Typography } from "@material-tailwind/react";
import PageNotFoundImage from "../../Resources/Images/404Image.jpeg";
import { useNavigate } from "react-router-dom";

const Pagenotfound = () => {
    const router = useNavigate();
    const redirectToHelpCenter = () => {
        router('/help');
    }
    const redirectToHome = () => {
        router("/");
    }
    return (
        <>
            <section className={`w-full h-screen flex items-center justify-center`}>
                <section className="w-[35%] h-[50%] flex items-center justify-center">
                    <img src={PageNotFoundImage} alt="" />
                </section>
                <section className="w-[50%] h-[50%] flex flex-col items-center justify-center">
                    <Typography className="font-thin" variant="h2">Page Not Found</Typography>
                    <Typography className="text-center pt-5 px-10 text-base" variant="paragraph" >Uh oh. We can't seem to find the page you are looking for. Try going back to the previous page or see our <span onClick={redirectToHelpCenter} className="cursor-pointer hover:underline-offset-2 hover:underline font-bold text-[#35ade1]">Help Center</span> for more information.</Typography>
                    <Button onClick={redirectToHome} size="md" color="amber" className="mt-5">Return Home</Button>
                </section>
            </section>
        </>
    )
}

export default Pagenotfound;