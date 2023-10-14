import { Button } from "@material-tailwind/react";

const Navbar = () => {
    return (
        <>
            <nav className="fixed top-0 w-full h-[80px] flex items-center justify-center">
                <section className="w-[40%] h-[60%] border rounded-full backdrop-blur-lg shadow-xl flex items-center justify-evenly">
                    <Button size="sm" variant="text" className="h-[80%] rounded-full text-gray-500">Home</Button>
                    <Button size="sm" variant="text" className="h-[80%] rounded-full text-gray-500">Feed</Button>
                    <Button size="sm" variant="text" className="h-[80%] rounded-full text-gray-500">Explore</Button>
                    <Button size="sm" variant="text" className="h-[80%] rounded-full text-gray-500">Features</Button>
                    <Button size="sm" variant="text" className="h-[80%] rounded-full text-gray-500">Sign In</Button>
                </section>
            </nav>
        </>
    )
}

export default Navbar;