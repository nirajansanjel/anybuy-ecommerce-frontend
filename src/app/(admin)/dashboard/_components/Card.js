import { FaRegClock } from "react-icons/fa6";

const Card = ({ label, icon,value }) => {
  return (
    <div className="p-4 rounded-lg shadow-md min-h-36 gap-3 flex flex-col items-start justify-center">
      <div className="flex items-center gap-4">
        {icon}
        <h3 className="text-gray-700">{label}</h3>
      </div>
      <div className="text-3xl px-2 font-semibold text-gray-700">{value}</div>
    </div>
  );
};

export default Card;
