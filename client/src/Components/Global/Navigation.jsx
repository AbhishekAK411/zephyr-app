import { IconButton, Tooltip } from "@material-tailwind/react";

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

const Navigation = () => {
    return (
        <>
            <section className="w-[4%] h-[350px] border fixed right-5 top-52 backdrop-blur-sm rounded-full shadow-2xl flex flex-col items-center justify-evenly">
                <Tooltip content="Home" className="bg-gray-900 rounded-full border text-white ml-[-10px]" placement="left" animate={animate}>
                    <IconButton className="rounded-full text-[#800000] text-base" variant="text">
                        <i className="fa fa-home" aria-hidden="true"></i>
                    </IconButton>
                </Tooltip>
                <Tooltip content="Profile" className="bg-gray-900 rounded-full border text-white ml-[-10px]" placement="left" animate={animate}>
                    <IconButton className="rounded-full text-[#800000] text-base" variant="text">
                        <i className="fa fa-user" aria-hidden="true"></i>
                    </IconButton>
                </Tooltip>
                <Tooltip content="Your Blogs" className="bg-gray-900 rounded-full border text-white ml-[-10px]" placement="left" animate={animate}>
                    <IconButton className="rounded-full text-[#800000] text-base" variant="text">
                        <i className="fab fa-slack" aria-hidden="true"></i>
                    </IconButton>
                </Tooltip>
                <Tooltip content="Community" className="bg-gray-900 rounded-full border text-white ml-[-10px]" placement="left" animate={animate}>
                    <IconButton className="rounded-full text-[#800000] text-base" variant="text">
                        <i className="fab fa-bandcamp" aria-hidden="true"></i>
                    </IconButton>
                </Tooltip>
                <Tooltip content="Logout" className="bg-gray-900 rounded-full border text-white ml-[-10px]" placement="left" animate={animate}>
                    <IconButton className="rounded-full text-[#800000] text-base" variant="text">
                        <i className="fa fa-sign-out" aria-hidden="true"></i>
                    </IconButton>
                </Tooltip>
            </section>
        </>
    )
}

export default Navigation;