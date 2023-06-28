import { SiGotomeeting } from 'react-icons/si';
import { AiOutlineHome, AiOutlineVideoCamera, AiOutlineMessage } from 'react-icons/ai';
import { BiMicrophone, BiDotsHorizontalRounded } from 'react-icons/bi';
import { BsBarChart, BsRecordCircleFill } from 'react-icons/bs';
import { TbSquareRoundedArrowUp } from 'react-icons/tb';
import { GoScreenFull } from 'react-icons/go';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { HiOutlineUsers, HiOutlineFolder, HiOutlineMail, HiOutlineSearch } from 'react-icons/hi';
import { useEffect, useState } from 'react';
import MeetingUser from './MeetingUser';
import InvitedUser from './InvitedUser';
import UserInMeeting from '../../Components/UserInMeeting/UserInMeeting';


const Meeting = () => {
    const [meetingUser, setMeetingUser] = useState([])
    const [invitedUser, setInvitedUser] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const meetingUsersRes = await fetch('meetingUsers.json')
                const meetingUserData = await meetingUsersRes.json()
                setMeetingUser(meetingUserData)

                const invitedUsersRes = await fetch('invitedUsers.json')
                const invitedUserData = await invitedUsersRes.json()
                setInvitedUser(invitedUserData)

            } catch (err) {
                console.log(err);
            }
        };

        fetchData();
    }, [])

    return (
        <div className="px-4 bg-blackColor">
            <div className="top-bar grid lg:grid-cols-2 md:grid-cols-2 items-center justify-between py-4">
                <div className="title flex items-center mb-4 text-whiteColor gap-3">
                    <div className="bg-grayColor bg-opacity-20 p-2 rounded-full"><span className="text-2xl"><SiGotomeeting /></span></div>
                    <div>
                        <h3 className="text-base font-medium">Business weekly meeting</h3>
                        <span className="block text-grayColor text-sm">April 15th, 2023 | 10:00 AM</span>
                    </div>
                </div>

                <div className="bg-primaryColor flex items-center justify-between bottom-0 py-3 fixed rounded-tr-2xl rounded-tl-2xl pr-8 w-full right-0 left-0 lg:border-0 md:border-0 lg:rounded-none md:rounded-none lg:bg-transparent md:bg-transparent lg:relative md:relative"> {/* responsive code */}
                    <div className="flex items-center pl-4 lg:pl-0 gap-4">
                        <a className='flex items-center gap-2 text-whiteColor text-xl bg-grayColor bg-opacity-10 p-2 rounded-md' href="#">
                            <span><AiOutlineHome /></span>
                            <span className="text-sm font-medium hidden lg:block lg:mt-1">Home</span></a>
                        <a className="text-whiteColor text-2xl bg-grayColor bg-opacity-10 p-2 rounded-md" href="#"><span><HiOutlineUsers /></span></a>
                        <a className="text-whiteColor text-2xl bg-grayColor bg-opacity-10 p-2 rounded-md" href="#"><span><HiOutlineFolder /></span></a>
                        <a className="text-whiteColor text-2xl bg-grayColor bg-opacity-10 p-2 rounded-md" href="#"><span><BsBarChart /></span></a>
                    </div>

                    <div className="flex items-center gap-5">
                        <a className="text-whiteColor text-2xl indicator" href="#">
                            <span className="indicator-item badge bg-primaryColor border-0 text-whiteColor text-xs p-2">2</span>
                            <span><HiOutlineMail /></span>
                        </a>
                        <a className="text-whiteColor text-2xl " href="#"><span><IoMdNotificationsOutline /></span></a>
                        <div>
                            <img className="rounded-full w-10 border-2 border-grayColor" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="avatar" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Calling section */}
            <div className="grid lg:grid-cols-4 gap-6">
                <div className="bg-[url('https://i.postimg.cc/kgFkK9kv/harps-joseph-t-Avp-DE7f-Xg-Y-unsplash.jpg')] bg-no-repeat bg-cover bg-center h-96 lg:h-screen lg:col-span-3 rounded-xl relative">

                    <div className="lg:px-8 bg-primaryColor w-full bg-opacity-5 absolute bottom-0">
                        {/* front speaker name */}
                        <div className="flex items-center lg:px-0 px-4 justify-between">
                            <h3 className="bg-blackColor text-whiteColor bg-opacity-40 py-2 px-4 rounded-full">Albert Flores</h3>
                            <span className="bg-blackColor text-xl text-whiteColor bg-opacity-40 p-3 rounded-full"><GoScreenFull /></span>
                        </div>

                        {/* Meeting participants profile */}
                        <div className="my-4 w-full absolute lg:relative lg:bottom-0 -bottom-28">
                            <UserInMeeting />
                        </div>

                        {/* Calling control option */}
                        <div className="flex items-center justify-between pb-4">

                            <div className="absolute lg:relative -top-[16.8rem] lg:top-0 left-1 lg:left-0 flex items-center gap-2 bg-blackColor bg-opacity-40 py-2 px-3 rounded-full"> {/* res */}
                                <span className="text-redColor text-xl"><BsRecordCircleFill /></span>
                                <span className="text-whiteColor font-medium text-sm">24:01:45</span>
                            </div>

                            <div className="mx-auto lg:m-0 flex items-center gap-4"> {/* responsive code */}
                                <button className="bg-primaryColor p-3 text-lg lg:text-2xl text-whiteColor rounded-full"><span><BiMicrophone /></span></button>
                                <button className="bg-primaryColor p-3 text-lg lg:text-2xl text-whiteColor rounded-full"><span><AiOutlineVideoCamera /></span></button>
                                <button className="text-whiteColor bg-redColor btn rounded-full border-0 capitalize font-thin hover:bg-redColor hover:bg-opacity-80">End Call</button>
                                <button className="bg-primaryColor p-3 text-lg lg:text-2xl text-whiteColor rounded-full"><span><TbSquareRoundedArrowUp /></span></button>
                                <button className="bg-primaryColor p-3 text-lg lg:text-2xl text-whiteColor rounded-full"><span><AiOutlineMessage /></span></button>
                            </div>

                            <div className="absolute lg:relative -top-[16.8rem] lg:top-0 right-1 lg:right-0"> {/* responsive code */}
                                <button className="border-2 p-3 text-lg lg:text-2xl text-whiteColor rounded-full"><span><BiDotsHorizontalRounded /></span></button>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Right side chat/Participants section */}
                <>
                    <div className="lg:mt-0 mt-24 bg-grayColor p-4 rounded-xl bg-opacity-10"> {/* responsive code */}
                        <div className="grid grid-cols-2 items-center mb-6">
                            <button className="bg-whiteColor py-1 rounded-s-md block">Chat</button>
                            <button className="block bg-primaryColor py-1 rounded-e-md bg-opacity-10 text-primaryColor">Participants
                                <span className=" rounded-md bg-whiteColor bg-opacity-70 font-semibold border-0 text-blackColor ml-2 text-xs px-2 py-1">2</span>
                            </button>
                        </div>

                        {/* Search bar  */}
                        <label className="relative block">
                            <span className="absolute text-whiteColor inset-y-0 left-0 flex  items-center pl-2">
                                <HiOutlineSearch />
                            </span>
                            <input className="placeholder:italic text-whiteColor bg-grayColor bg-opacity-40 placeholder:text-grayColor block bg-white w-full rounded-md py-2 pl-8 pr-3 shadow-sm focus:outline-none sm:text-sm" placeholder="Search for anything..." type="text" name="search" />
                        </label>

                        {/* In meeting option */}
                        <div>
                            <p className="text-primaryColor font-medium my-6">In meeting</p>
                            {
                                meetingUser.map(user => <MeetingUser key={user.id} user={user} />)
                            }
                        </div>

                        {/* Invited people option */}
                        <div>
                            <p className="text-primaryColor font-medium my-6">
                                Invited people
                                <span className=" rounded-md bg-whiteColor bg-opacity-70 font-semibold border-0 text-blackColor ml-2 text-xs px-2 py-1">2</span>
                            </p>
                            {
                                invitedUser.map(user => <InvitedUser key={user.id} user={user} />)
                            }
                        </div>
                    </div>
                </>
            </div>
        </div >
    );
};

export default Meeting;