// import { MinusIcon } from "@heroicons/react/20/solid";

function Home() {
    return (
        <div id="home" className="bg-cover bg-center min-h-screen flex flex-col items-center justify-center text-white">
            <div className="home text-center">
                <h1 className="text-4xl font-bold mb-4 ml">SAVE THE DATE</h1>
                <br />
                <h2 className="text-2xl italic h-20 mb-2 mt-70">Temitope & Adenike</h2>
                {/* <MinusIcon className="w-[1px] h-16 rotate-90 text-red-500" />  */}
                <div className="w-[2px] h-40 bg-yellow-600 mx-auto bg- mt-85  my-10"></div> {/* Vertical line */}
                <h2 className="text-2xl italic mb-4 h-20 mt-70 ">October 14th 2023</h2>
        
            </div>
            <div className="home2 bg-white text-gray-800 p-6 mt-8 max-w-md text-center">
                <h2 className=" text-2xl font-semibold mb-2 text">The big day</h2>
                <h2>28. November. 2023</h2>
                <p className="text-lg">We are so excited to share our special day with our family and friends. Thank you so much for visiting our wedding website!</p>
<br />
<p> Just some  days until we get married!</p>
            </div>
        </div>
    );
}

export default Home;
