const RoomCard = ({ room }) => {
  return (
    <div className="bg-white hover:bg-gradient-to-r from-violet-100 to-pink-100 rounded-lg shadow-lg max-w-sm">
      <img
        src={room.image}
        alt={room.Roomname}
        className="rounded-t-lg object-cover w-full h-48"
      />
      <div className="p-5">
        <h3 className="text-xl font-bold mb-2">{room.Roomname}</h3>
        <p className="text-gray-700 mb-4">{room.description}</p>{" "}
        {/* Use description here */}
        <div className="flex items-center justify-between">
          <span className="text-purple-600 font-bold text-lg">
            {room.Price} / Per Night {/* Use Price here */}
          </span>
          <button className="bg-purple-500 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
