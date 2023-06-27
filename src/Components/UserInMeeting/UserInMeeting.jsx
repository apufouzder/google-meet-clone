import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BiMicrophone } from 'react-icons/bi';
import { useEffect, useState } from "react";

const UserInMeeting = () => {
    const [participantUser, setParticipantUser] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const participantUsersRes = await fetch('meetingUsers.json')
                const participantUserData = await participantUsersRes.json()
                setParticipantUser(participantUserData)

            } catch (err) {
                console.log(err);
            }
        };

        fetchData();
    }, [])
    console.log(participantUser.photo);
    return (
        <>
            <Swiper
                className=""
                spaceBetween={10}
                slidesPerView={5}
                sli
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {
                    participantUser.map(user => 
                        <SwiperSlide style={{
                            backgroundImage: `url(${user?.photo})`,
                        }} key={user.id} className={`!w-48 !h-24 !mr-4 relative bg-no-repeat bg-cover bg-center rounded-xl`}>
                            <div className="absolute flex justify-between items-center bottom-2 text-whiteColor w-full pl-2">
                                <span className="block text-xl bg-grayColor p-1 rounded-full"><BiMicrophone /></span>
                                <h4 className="text-xs bg-blackColor bg-opacity-40 p-2 rounded-tl-full rounded-bl-full ">{ user.name}</h4>
                            </div>
                        </SwiperSlide>
                    )
                }


            </Swiper>
        </>
    );
};

export default UserInMeeting;