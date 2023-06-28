import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { BiMicrophone } from 'react-icons/bi';
import { useEffect, useState } from "react";




const UserInMeeting = () => {
  const [participantUser, setParticipantUser] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const participantUsersRes = await fetch('meetingUsers.json');
        const participantUserData = await participantUsersRes.json();
        setParticipantUser(participantUserData);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Swiper
        className="mySwiper"
        grabCursor={true}
        slidesPerView={5}
        spaceBetween={30}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          50: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          100: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
      >
        {participantUser.map((user) => (
          <SwiperSlide
            key={user.id}
            style={{
              backgroundImage: `url(${user?.photo})`,
            }}
            className="!w-48 !h-24 !mr-4 relative bg-no-repeat bg-cover bg-center rounded-xl"
          >
            <div className="flex absolute justify-between items-center bottom-2 text-whiteColor w-full pl-2">
              <span className="block text-xl bg-grayColor p-1 rounded-full">
                <BiMicrophone />
              </span>
              <h4 className="text-xs bg-blackColor bg-opacity-40 p-2 rounded-tl-full rounded-bl-full">
                {user.name}
              </h4>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default UserInMeeting;
