import video from "../assets/aboutvideo.mp4";

function About() {
    return (
        <div id="aboutvideo" className="p-6 bg-gray-100 text-center">
            <h1 className="text-4xl font-bold text-slate-400 mb-4">ABOUT US</h1>
            <p className="text-lg text-gray-700 mb-6">
                Here are some interesting things you should know about us.
            </p>
            <div className="flex justify-center">
                <video controls className="rounded-lg shadow-lg w-full max-w-md">
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    );
}

export default About;