import "./Home.css"
import emblem from "../assets/tessera-emblem-light-purple-transparent.png"

function Home() {
    return (
        <div className="overflow-x-hidden">
            <div id="home-landing" className="flex flex-col justify-center items-center min-h-[100vh] p-5 md:p-10">
                <div className="flex flex-col justify-center items-center">
                    <img src={emblem} width={200} className="spinner"></img>
                    <h1 className="text-2xl sm:text-3xl xl:text-6xl p-4 font-semibold leading-14">Coming Soon</h1>
                    <p className="text-lg text-[var(--light-grey)]">Software Design & Development Services</p>
                </div>
            </div>
        </div>
    );
}

export default Home;