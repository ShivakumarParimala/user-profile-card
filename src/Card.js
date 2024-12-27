
import React from "react";

const Card = ({ user }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 max-w-sm">
      <div className="flex items-center space-x-4">
        <img
          className="w-24 h-24 rounded-full border-2 border-blue-500"
          src={user.picture.large}
          alt={`${user.name.first} ${user.name.last}`}
        />
        <div>
          <h2 className="text-xl font-bold text-gray-800">
            {user.name.first} {user.name.last}
          </h2>
          <p className="text-gray-600">{user.email}</p>
          <p className="text-gray-600">{user.phone}</p>
        </div>
      </div>
      <div className="mt-4">
        <p className="text-gray-700">
          <span className="font-semibold">Location: </span>
          {user.location.city}, {user.location.country}
        </p>
      </div>
    </div>
  );
};

export default Card;
