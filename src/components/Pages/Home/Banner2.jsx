import React from 'react';

const Banner2 = () => {
    return (
        <main className=" relative overflow-hidden h-screen">
            
            <div className="bg-white flex relative z-20 items-center overflow-hidden">
                <div className="container mx-auto px-6 flex relative py-16">
                    <div className="sm:w-2/3 lg:w-2/5 flex flex-col relative z-20">
                        <span className="w-20 h-2 bg-blue-900 mb-12"></span>
                        <h1 className="font-bebas-neue uppercase text-6xl sm:text-8xl font-black flex flex-col leading-none  text-blue-900">
                            Be on
                            <span className="text-5xl sm:text-7xl">
                                Toys
                            </span>
                        </h1>
                        <p className="text-sm sm:text-base text-gray-700 mt-6 font-serif">
                        Welcome to our Shop. Browse through our huge collection of fun toys, dolls, puzzle games and more for your kids. Shop, play and create fond memories with your little ones!
                        </p>
                       
                    </div>
                    <div className="hidden sm:block sm:w-1/3 lg:w-3/5 relative">
                        <img src="https://i.ibb.co/Lrn4hWR/1338710-removebg-preview.png" className="max-w-xs md:max-w-sm m-auto" alt="Watch illustration"/>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Banner2;
