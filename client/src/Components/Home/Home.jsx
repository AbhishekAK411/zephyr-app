import { useState } from "react";
import Navbar from "../Global/Navbar";
import Navigation from "../Global/Navigation";
import Register from "../User/Register";

const Home = () => {
    const [loginRender, setLoginRender] = useState(false);

    const handleLoginState = () => {
        setLoginRender((prev) => !prev);
    }
    return (
        <>
            {!loginRender && <Navbar onLoginToggle={handleLoginState} />}
            {!loginRender && <Navigation />}
            <main className="w-full min-h-screen border-black border">
                {loginRender && <Register onLoginCloseToggle={handleLoginState} />}
            </main>
        </>
    )
}

export default Home;