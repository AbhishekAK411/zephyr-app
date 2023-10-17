import { Button, IconButton, Input } from "@material-tailwind/react";
import {motion} from "framer-motion";
import { useState } from "react";
import { toast } from "react-hot-toast";
import api from "../../Utils/Axiosconfig";

const Login = ( { registerMode, onRegisterToggle } ) => {
  const [userData, setUserData] = useState({
    field: "",
    password: ""
  });

    const handleChange = (e) => {
      setUserData({...userData, [e.target.name]: e.target.value});
    }
    const handleLogin = async() => {
      try{
        const response = await api.post("/login", {
          field: userData.field,
          password: userData.password
        });

        const axiosResponse = response.data;
        if(axiosResponse?.success){
          toast.success(axiosResponse?.message);
        }
        onRegisterToggle();
      }catch(error){
        toast.error(error?.response?.data?.message);
      }
    }
    return (
        <>
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className={`w-[600px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[500px] flex items-center justify-center`}
          >
            <section className="absolute right-8 top-6">
              <IconButton
              onClick={onRegisterToggle}
                variant="text"
                className="rounded-full text-base"
              >
                <i className="fa fa-times" aria-hidden="true"></i>
              </IconButton>
            </section>
            <section className="w-[95%] h-[95%] border rounded-xl flex flex-col justify-evenly shadow-2xl">
              <section className="w-full h-[35%]  flex flex-col items-center">
                <p className="text-center pt-2">Login</p>
                <section className="flex items-center justify-evenly w-[80%] py-7">
                  <IconButton
                    size="md"
                    className="rounded bg-[#ea4335] hover:shadow-[#ea4335]/20 focus:shadow-[#ea4335]/20 active:shadow-[#ea4335]/10"
                  >
                    <i className="fab fa-google text-lg" />
                  </IconButton>
                  <IconButton size="md" className="rounded">
                    <i className="fab fa-github text-lg" aria-hidden="true" />
                  </IconButton>
                  <IconButton
                    size="md"
                    className="rounded bg-[#3b5998] hover:shadow-[#3b5998]/20 focus:shadow-[#3b5998]/20 active:shadow-[#3b5998]/10"
                  >
                    <i className="fab fa-facebook text-lg" aria-hidden="true" />
                  </IconButton>
                </section>
                <p className="text-center text-gray-500 pt-2">or</p>
              </section>
              <section className="w-full h-[59%] flex flex-col items-center justify-between">
                <section className="w-[95%] h-[70%]  flex flex-col items-center justify-evenly">
                  <Input
                    onChange={handleChange}
                    name="field"
                    label="Username or Email"
                    className="focus:border-gray-900 text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow"
                    type="text"
                  />
                  <Input
                    onChange={handleChange}
                    name="password"
                    label="Password"
                    className="focus:border-gray-900  text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow"
                    type="text"
                  />
                </section>
                <section className="w-[95%] h-[28%]">
                  <Button
                    onClick={handleLogin}
                    fullWidth
                    className="bg-gray-900"
                  >
                    Sign in
                  </Button>
                  <p className="mt-4 mb-0 leading-normal text-sm">
                    Don't have an account?{" "}
                    <u onClick={registerMode} className="font-bold text-blue-gray-700 cursor-pointer">
                      Sign Up
                    </u>
                  </p>
                </section>
              </section>
            </section>
          </motion.section>
        </>
      );
}

export default Login;