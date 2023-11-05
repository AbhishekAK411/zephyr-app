import { Typography } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

const Datanotfound = () => {
    const router = useNavigate();
    const redirectToHelpCenter = () => {
        router("/help");
    }
    return (
        <>
            <section className="w-full h-screen flex flex-col items-center justify-center">
                <Typography variant="h2">We couldn't find what you are looking for.</Typography>
                <Typography variant="h3" className="font-thin">Kindly refresh this page if the error persists, or try our <span onClick={redirectToHelpCenter} className="cursor-pointer hover:underline-offset-2 hover:underline font-bold text-[#35ade1]">Help Center</span></Typography>
            </section>
        </>
    )
}

export default Datanotfound;