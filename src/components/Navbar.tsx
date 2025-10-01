import "./Navbar.css";
import logo from "../assets/logo.png";

function Navbar() {
    return (
        <>
            <div
                id="nav-bar"
                className="flex justify-between p-5 px-8 absolute w-full left-0 z-50"
            >
                <div id="branding">
                    <img id="logo" src={logo} width={200} alt="Logo" />
                </div>

            </div>
        </>
    );
}

export default Navbar;
