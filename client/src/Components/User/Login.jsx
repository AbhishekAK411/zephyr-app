import { IconButton } from "@material-tailwind/react";

const Login = () => {
    return (
        <>
            <section className="w-[600px] h-[500px] border-black border flex items-center justify-center">
                <section className="w-[95%] h-[95%] border-black border rounded-xl flex flex-col justify-evenly">
                    <section className="w-full h-[40%] border-black border">
                        <p className="text-center pt-2">Login</p>
                        <section className="flex">
                            <IconButton size="md" className="rounded-full flex items-center justify-center"></IconButton>
                            <IconButton size="md" className="rounded-full flex items-center justify-center"></IconButton>
                            <IconButton size="md" className="rounded-full flex items-center justify-center"></IconButton>
                        </section>
                    </section>
                    <section className="w-full h-[55%] border-black border"></section>
                </section>
            </section>
        </>
    )
}

export default Login;