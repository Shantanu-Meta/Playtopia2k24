import React from "react"
import '../Styles/Footer.css'

const Footer = () => {
    return (
        <footer className="h-full w-full relative" style={{backgroundImage: 'url(/footer.jpg)'}} >
            <div className=" w-full px-6 py-10 " style={{backdropFilter: 'blur(30px)'}}>
                <div className="lg:flex w-full">
                    <div className="w-full  lg:w-2/5">
                        <div className="px-6 flex justify-evenly items-center">
                            <a href="#">
                                <img className="w-auto h-[70px]" src="/iemLogo.png" alt="iem logo" />
                            </a>
                            <a href="#">
                                <img className="w-auto h-[120px]" src="/Logo.svg" alt="playtopia logo" />
                            </a>
                        </div>
                    </div>
                    <div className="mt-6 lg:mt-0 lg:flex-1 ">
                        <div className="textArea grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 ">
                            <div className="">
                                <div>
                                    <h3 className="uppercase text-white ">Faculty Coordinator</h3>
                                </div>
                                <div>
                                <a href="#" className="block mt-2 text-sm  text-gray-400 hover:underline">Nayantara Mitra</a>
                                <a href="#" className="block mt-2 text-sm text-gray-400 hover:underline">Ankan Bhowmik</a>
                                <a href="#" className="block mt-2 text-sm text-gray-400 hover:underline">Biswajit Maity</a>
                                <a href="#" className="block mt-2 text-sm text-gray-400 hover:underline">Sourav Pramanik</a>
                                <a href="#" className="block mt-2 text-sm text-gray-400 hover:underline">Priyanka Das</a>
                                </div>
                                
                            </div>
                            <div>
                                <h3 className=" uppercase text-white">Student Coordinator</h3>
                                <a href="#" className="block mt-2 text-sm text-gray-400 hover:underline">Student 1</a>
                                <a href="#" className="block mt-2 text-sm text-gray-400 hover:underline">Student 2</a>
                                <a href="#" className="block mt-2 text-sm text-gray-400 hover:underline">Student 3</a>
                            </div>
                            <div>
                                <h3 className=" uppercase text-white">Products</h3>
                                <a href="#" className="block mt-2 text-sm  text-gray-400 hover:underline">Instagram</a>
                                <a href="#" className="block mt-2 text-sm text-gray-400 hover:underline">Facebook</a>
                            </div>
                            <div>
                                <h3 className=" uppercase text-white">Location</h3>
                                <a href="#">
                                    <iframe className="w-full  rounded-md" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.236881498857!2d88.42683317574301!3d22.57024203305585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0275b21911df59%3A0x9039fd6aa6c5833c!2sIEM%20Ashram%20Building%2C%20Street%20Number%2027%2C%20GN%20Block%2C%20Nalban%20Bheri%2C%20Dhapa%2C%20Kolkata%2C%20West%20Bengal%20700098!5e0!3m2!1sen!2sin!4v1709735748437!5m2!1sen!2sin" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="h-px my-4  border-none bg-gray-700" />
                <div>
                    <p className="text-center text-gray-400">© Playtopia 2024 - All rights reserved</p>
                </div>
            </div>
        </footer>

    )
}


export default Footer