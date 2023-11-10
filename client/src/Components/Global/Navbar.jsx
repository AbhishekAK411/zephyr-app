import { Button, Avatar } from "@material-tailwind/react";
import { useContext } from "react";
import { authContext } from "../../Context/Authcontext";
import userDummyImage from "../../Resources/Images/userDummyImage.png";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Navbar = ({ onLoginToggle }) => {

    const {state} = useContext(authContext);
    const router = useNavigate();
    const username = state?.user?.username;
    const userrole = state?.user?.role;

    const redirectToCreateBlog = () => {
        router("/create/blog");
    }
    const navbarVariants = {
        initial : {
            y: -180
        },
        animate: {
            y: 0
        }
    }
    const transition = {
        type: "spring",
        stiffness: 260,
        damping: 20,
    }
    return (
        <>
            <motion.nav variants={navbarVariants} initial="initial" animate="animate" transition={transition} className="z-50 select-none fixed top-0 w-full h-[80px] flex items-center justify-center">
                <section className="w-[40%] h-[60%] border rounded-full backdrop-blur-lg shadow-xl flex items-center justify-evenly">
                    <Button size="sm" variant="text" className="h-[80%] rounded-full text-gray-500">Home</Button>
                    <Button size="sm" variant="text" className="h-[80%] rounded-full text-gray-500">Feed</Button>
                    {userrole === "Content Creator" ? (<>
                        <Button onClick={redirectToCreateBlog} size="sm" variant="text" className="h-[80%] rounded-full text-gray-500">Create</Button>
                    </>) : (<>
                        <Button size="sm" variant="text" className="h-[80%] rounded-full text-gray-500">Explore</Button>
                    </>)}
                    <Button size="sm" variant="text" className="h-[80%] rounded-full text-gray-500">Features</Button>
                    {username ? (<><Button size="xs" variant="text" className="rounded-full h-[80%] flex items-center justify-center text-gray-500"><Avatar src={userDummyImage} size="xs" withBorder={true} className="p-0.5" /></Button></>) : (<><Button onClick={onLoginToggle} size="sm" variant="text" className="h-[80%] rounded-full text-gray-500">Sign In</Button></>)}
                </section>
            </motion.nav>
        </>
    )
}

export default Navbar;