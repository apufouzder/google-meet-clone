import { RiVideoAddLine } from 'react-icons/ri';
import { MdKeyboard } from 'react-icons/md';
import { FiLink2, FiPlus } from 'react-icons/fi';
import { AiTwotoneCalendar } from 'react-icons/ai';
import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <div className="container  mx-auto">
            <div className="lg:w-1/2 mx-auto mt-12 lg:flex md:flex justify-center text-center items-center h-screen gap-4">

                <div className="dropdown mb-3 lg:mb-0 md:mb-0">
                    <a href='#' tabIndex={0} className="bg-primaryColor flex rounded font-medium btn capitalize text-lg hover:bg-primaryColor text-neutral-50 sm:btn-sm md:btn-md">
                       <span className=''><RiVideoAddLine /></span>  <p className=''>New Meeting</p>
                    </a>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content text-2xl -mt-12 z-[1] p-2 shadow-xl bg-base-100 w-80">
                        <li><a className="text-base font-medium my-4 text-grayColor"><span className="text-blackColor text-xl mr-3"><FiLink2 /></span>Create a meeting for later</a></li>
                        <li><a className="text-base font-medium text-grayColor"><span className="text-blackColor text-xl mr-3"><FiPlus /></span>Start an instant meeting</a></li>
                        <li><a className="text-base font-medium my-4 text-grayColor"><span className="text-blackColor text-xl mr-3"><AiTwotoneCalendar /></span>Schedule in Google Calendar</a></li>
                    </ul>
                </div>

                <div className='flex justify-center'>
                    <div className="flex items-center relative">
                        <label className='absolute text-2xl text-grayColor left-2'><MdKeyboard /></label>
                        <input type="text" placeholder="Enter a code or link" className="input focus:outline-none border-grayColor font-normal pl-9 text-xl rounded w-full" />
                    </div>

                    <Link to="/askToJoin">
                        <button className="btn border-0 capitalize text-primaryColor font-medium text-lg bg-primaryColor bg-opacity-5 rounded">Join</button>
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default Home;