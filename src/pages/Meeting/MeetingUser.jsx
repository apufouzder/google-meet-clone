import { AiOutlineMinusCircle } from 'react-icons/ai';

const MeetingUser = ({ user }) => {
    return (
        <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
                <img className="rounded-full w-12 h-12 bg-cover object-cover" src={user.photo} alt="Avatar" />
                <div>
                    <h4 className="text-lg font-semibold text-whiteColor">{ user.name}</h4>
                    <span className="block text-sm text-grayColor">{ user.role}</span>
                </div>
            </div>
            <button className="text-whiteColor text-2xl"><AiOutlineMinusCircle /></button>
        </div>
    );
};

export default MeetingUser;