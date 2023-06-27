import { BsThreeDotsVertical, BsStars, BsThreeDots, BsArrowUpSquare } from 'react-icons/bs';
import { BiMicrophone, BiVideoOff, BiCaptions } from 'react-icons/bi';
import { IoMdLaptop } from 'react-icons/io';
import { FiSettings } from 'react-icons/fi';
import { MdReportGmailerrorred, MdTroubleshoot, MdOutlineLiveHelp } from 'react-icons/md';


const AskToJoin = () => {
    return (
        <div className="container md:mt-14 lg:mt-14 mx-auto">
            <div className="grid lg:grid-cols-3 md:grid-cols-3 gap-4">
                {/* Right side video screen section */}
                <div className="lg:col-span-2 md:col-span-2 flex flex-col gap-44 justify-between p-5 rounded-lg text-whiteColor bg-blackColor">
                    <div className="text-2xl flex justify-end">
                        <div className="dropdown">
                            <span tabIndex={0} className="cursor-pointer"><BsThreeDotsVertical /></span>

                            <ul tabIndex={0} className="menu menu-sm dropdown-content rounded-md -mt-8 -right-1 z-[1] p-2 shadow-xl bg-base-100 w-80">
                                <li><a className="text-base font-medium my-1 text-blackColor"><span className="text-blackColor text-2xl mr-3"><BsStars /></span>Apply visual effects</a></li>
                                <li><a className="text-base font-medium text-blackColor"><span className="text-blackColor text-2xl mr-3"><BiCaptions /></span>Turn on captions</a></li>

                                <div className="divider"></div>

                                <li><a className="text-base font-medium text-blackColor"><span className="text-blackColor text-2xl mr-3"><MdOutlineLiveHelp /></span>Report a problem</a></li>
                                <li><a className="text-base font-medium my-1 text-blackColor"><span className="text-blackColor text-2xl mr-3"><MdReportGmailerrorred /></span>Report abuse</a></li>
                                <li><a className="text-base font-medium my-1 text-blackColor"><span className="text-blackColor text-2xl mr-3"><MdTroubleshoot /></span>Troubleshooting & help</a></li>
                                <li><a className="text-base font-medium my-1 text-blackColor"><span className="text-blackColor text-2xl mr-3"><FiSettings /></span>Settings</a></li>
                            </ul>

                        </div>
                    </div>

                    <h2 className='text-center text-3xl'>Camera is off</h2>

                    <div className="flex items-center text-2xl justify-between">
                        <div className="p-2 bg-primaryColor rounded-full">
                            <BsThreeDots />
                        </div>
                        <div className="flex items-center gap-6">
                            <span className="border-2 p-4 rounded-full cursor-pointer"><BiMicrophone /></span>
                            <span className="p-4 bg-redColor rounded-full cursor-pointer"><BiVideoOff /></span>
                        </div>
                        <div className="border-2 p-4 rounded-full cursor-pointer">
                            <span><BsStars /></span>
                        </div>
                    </div>
                </div>
                {/* Left side join section */}
                <div className="flex justify-center flex-col text-center">
                    <>
                        <h1 className="text-4xl">Ready to join?</h1>
                        <strong className="my-9 block text-grayColor">No one else is here</strong>
                        <div className='flex justify-center gap-2 mb-10'>
                            <button className="bg-primaryColor rounded-full font-medium btn capitalize text-lg hover:bg-primaryColor text-neutral-50 sm:btn-sm md:btn-md lg:btn-lg">Join now</button>
                            <button className="bg-transparent hover:bg-opacity-10 rounded-full shadow-lg font-medium btn capitalize text-lg text-primaryColor sm:btn-sm md:btn-md lg:btn-lg">
                                <span><BsArrowUpSquare /></span>Present
                            </button>
                        </div>
                        <p className="text-grayColor font-medium text-lg mb-6">Other joining options</p>
                        <a href='#' className="text-primaryColor flex justify-center items-center gap-2 font-medium text-lg"><span><IoMdLaptop /></span>Use Companion mode</a>
                    </>
                </div>
            </div>
        </div>
    );
};

export default AskToJoin;