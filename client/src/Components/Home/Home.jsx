import { useState } from "react";
import Navbar from "../Global/Navbar";
import Navigation from "../Global/Navigation";
import Register from "../User/Register";

const Home = () => {
    const [userRender, setUserRender] = useState(false);

    const handleRenderState = () => {
        setUserRender((prev) => !prev);
    }
    return (
        <>
            {!userRender && <Navbar onLoginToggle={handleRenderState} />}
            {!userRender && <Navigation />}
            <main className="w-full min-h-screen border-black border">
                {userRender && <Register onRegisterToggle={handleRenderState} />}
            </main>
        </>
    )
}

export default Home;