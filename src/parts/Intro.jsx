import React from "react";

function Intro() {
    return (
        <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
            <h1 className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold">Paulo Eduardo Reitz</h1>
            <p className="text-base md:text-xl mb-3 font-medium">Mechanical Engineer</p>
            <p className="text-sm max-w-xl mb-6 font-bold">
            As a mechanical engineer with a special interest in thermal sciences, I had the opportunity to work with multidisciplinary teams across the world!
            <br />
            I have previous experience in verification and validation (V&V), experimental research, software development, and product design, mainly focused on cooling systems.
            <br />
            My most discernible qualities are dedication, critical thinking, and fast learning. Loving to learn new things whenever possible, I studied different programming languages, simulation, and video/image editing tools.
            </p>
        </div>   
    )
}

export default Intro;