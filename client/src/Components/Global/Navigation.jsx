import { IconButton, Tooltip } from "@material-tailwind/react";
import { motion } from "framer-motion";

const Navigation = () => {

    const animate = {
        mount: {
            scale: 1,
            x: 0
        },
        unmount: {
            scale: 0,
            x: 25
        }
    }
    const transition = {
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 1.8
    }
    const buttonVariants = {
        initial: { 
            scale: 0
        },
        animate: { 
            rotate: 360,
            scale: 1,
        },
    };
    return (
        <>
            <motion.section initial={{x: 180}} animate={{x: 0}} transition={{delay: 1}} className="w-[4%] h-[350px] border fixed right-5 top-52 backdrop-blur-sm rounded-full shadow-2xl flex flex-col items-center justify-evenly">
                <motion.div variants={buttonVariants} initial="initial" animate="animate" transition={transition}>
                    <Tooltip content="Home" className="bg-gray-900 rounded-full border text-white ml-[-10px]" placement="left" animate={animate}>
                        <IconButton className="rounded-full text-[#800000] text-base" variant="text">
                            <i className="fa fa-home" aria-hidden="true"></i>
                        </IconButton>
                    </Tooltip>
                </motion.div>
                <motion.div variants={buttonVariants} initial="initial" animate="animate" transition={transition}>
                    <Tooltip content="Profile" className="bg-gray-900 rounded-full border text-white ml-[-10px]" placement="left" animate={animate}>
                        <IconButton className="rounded-full text-[#800000] text-base" variant="text">
                            <i className="fa fa-user" aria-hidden="true"></i>
                        </IconButton>
                    </Tooltip>
                </motion.div>
                <motion.div variants={buttonVariants} initial="initial" animate="animate" transition={transition}>
                    <Tooltip content="Your Blogs" className="bg-gray-900 rounded-full border text-white ml-[-10px]" placement="left" animate={animate}>
                        <IconButton className="rounded-full text-[#800000] text-base" variant="text">
                            <i className="fab fa-slack" aria-hidden="true"></i>
                        </IconButton>
                    </Tooltip>
                </motion.div>
                <motion.div variants={buttonVariants} initial="initial" animate="animate" transition={transition}>
                    <Tooltip content="Community" className="bg-gray-900 rounded-full border text-white ml-[-10px]" placement="left" animate={animate}>
                        <IconButton className="rounded-full text-[#800000] text-base" variant="text">
                            <i className="fab fa-bandcamp" aria-hidden="true"></i>
                        </IconButton>
                    </Tooltip>
                </motion.div>
                <motion.div variants={buttonVariants} initial="initial" animate="animate" transition={transition}>
                    <Tooltip content="Logout" className="bg-gray-900 rounded-full border text-white ml-[-10px]" placement="left" animate={animate}>
                        <IconButton className="rounded-full text-[#800000] text-base" variant="text">
                            <i className="fa fa-sign-out" aria-hidden="true"></i>
                        </IconButton>
                    </Tooltip>
                </motion.div>
            </motion.section>
        </>
    )
}

export default Navigation;