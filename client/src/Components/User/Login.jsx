import { IconButton, Button, Input } from "@material-tailwind/react";

const Login = () => {
    return (
        <>
            <section className="w-[600px] h-[500px] flex items-center justify-center">
                <section className="w-[95%] h-[95%] border border-gray-400 rounded-xl flex flex-col justify-evenly">
                    <section className="w-full h-[35%]  flex flex-col items-center">
                        <p className="text-center pt-2">Login</p>
                        <section className="flex items-center justify-evenly w-[80%] py-7">
                            <IconButton size="md" className="rounded bg-[#ea4335] hover:shadow-[#ea4335]/20 focus:shadow-[#ea4335]/20 active:shadow-[#ea4335]/10"><i className="fab fa-google text-lg" /></IconButton>
                            <IconButton size="md" className="rounded"><i className="fab fa-github text-lg" aria-hidden="true" /></IconButton>
                            <IconButton size="md" className="rounded bg-[#3b5998] hover:shadow-[#3b5998]/20 focus:shadow-[#3b5998]/20 active:shadow-[#3b5998]/10"><i className="fab fa-facebook text-lg" aria-hidden="true" /></IconButton>
                        </section>
                        <p className="text-center text-gray-500 pt-2">or</p>
                    </section>
                    <section className="w-full h-[59%] flex flex-col items-center justify-between">
                        <section className="w-[95%] h-[70%]  flex flex-col items-center justify-evenly">
                            <Input label="Username" className="focus:border-gray-900 text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow" type="text" />
                            <Input label="Email" className="focus:border-gray-900 text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow" type="text" />
                            <Input label="Password" className="focus:border-gray-900  text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow" type="text" />
                            <Input label="Confirm Password" className="focus:border-gray-900  text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow" type="text" />
                        </section>
                        <section className="w-[95%] h-[28%]">
                            <Button fullWidth className="bg-gray-900">Sign in</Button>
                            <p class="mt-4 mb-0 leading-normal text-sm">Already have an account? <u class="font-bold text-blue-gray-700 cursor-pointer">Sign in</u></p>
                        </section>
                    </section>
                </section>
            </section>
        </>
    )
}

export default Login;