import { updateProfileImage } from "@/api/users";
import Loader from "@/app/components/Loader";
import { updateUserImage } from "@/redux/auth/authSlice";
import Image from "next/image";
import React, { useState } from "react";
import { FaUser } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const ProfileImage = ({ user }) => {
  const [profileImage, setProfileImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  function updateImage() {
    const formdata = new FormData();
    setLoading(true);
    formdata.append("image", profileImage);

    updateProfileImage(user._id, formdata)
      .then((response) => {
        toast.success("Profile Update successfull.",{autoClose:1000})
        dispatch(updateUserImage(response.data.profileImage));

        setProfileImage(null);
      })
      .catch((error) => {
        toast.error(error.response?.data, { autoClose: 1500 });
      })
      .finally(() => setLoading(false));
  }

  return (
    <div className="flex">
      <div className="">
        {user.profileImage ? (
          <Image
            src={user.profileImage}
            alt={"profile"}
            width={64}
            height={64}
            className="h-16 w-16 rounded-full object-cover border border-gray-200 p-1"
          />
        ) : (
          <FaUser className="h-16 w-16 rounded-full p-2 bg-gray-200" />
        )}
      </div>
      <div className="p-2 flex flex-col">
        <input
          type="file"
          accept=".png,.jpg,.jpeg"
          required
          className="bg-gray-200 border border-gray-400 my-2 p-1 rounded-md text-xs"
          onChange={(e) => {
            const file = e.target.files[0];
            setProfileImage(file);
          }}
        />
        <button
          onClick={updateImage}
          className="flex gap-1 p-1 hover:cursor-pointer bg-secondary rounded text-sm max-w-36 text-xs"
        >
          Change Profile Image
          {loading && <Loader className="h-4 w-4" />}
        </button>
      </div>
    </div>
  );
};

export default ProfileImage;
