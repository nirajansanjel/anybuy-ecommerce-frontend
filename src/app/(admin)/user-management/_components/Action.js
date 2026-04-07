import { updateStatus } from "@/api/orders";
import { updateUserRoles } from "@/api/users";
import Modal from "@/app/components/Modal";
import React, { useState } from "react";
import { BsBox2 } from "react-icons/bs";
import { FaPencil, FaRegCircleUser } from "react-icons/fa6";
import { MdEdit } from "react-icons/md";
import { toast } from "react-toastify";

const Action = ({ id, userRoles=[] }) => {
  const [showModal, setShowModal] = useState(false);
  const [roles, setRoles] = useState(userRoles);

  function updateRole(role) {
      let updatedRoles = roles;

    if (updatedRoles.includes(role)) {
      updatedRoles = updatedRoles.filter((item) => item != role);
    } else {
      updatedRoles.push(role);
    }

    setRoles(updatedRoles);

    
  }

  function updateRoleUser() {
    
    updateUserRoles(id, { roles })
      .then(() => {
        toast.success(`Role update success`, { autoClose: 1500 });
      })
      .catch(() => {
        toast.error("Role Update failed!", { autoClose: 1500 });
      })
      .finally(() => {
        setShowModal(false);
      });
  }

  return (
    <>
      <button className="flex" onClick={() => setShowModal(true)}>
        <span className="px-6 text-lg hover:text-green-600 ">
          <FaPencil />
        </span>
      </button>
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        label={"Update user roles."}
        icon={<FaRegCircleUser className="mx-auto text-6xl text-gray-400 mb-5" />}
        info={
          <div  className="flex justify-center items-center pb-5 gap-4 pb-5">
             <div className="flex items-center">
              <input
                type="checkbox"
                id="admin"
                className="mr-1"
                defaultChecked={roles.includes("ADMIN")}
                onClick={() => updateRole("ADMIN")}
              />
              <label htmlFor="admin">ADMIN</label>
            </div>
              <div className="flex items-center">
              <input
                type="checkbox"
                id="merchant"
                className="mr-1"
                defaultChecked={roles.includes("MERCHANT")}
                onClick={() => updateRole("MERCHANT")}
              />
              <label htmlFor="merchant">MERCHANT</label>
            </div>
              <div className="flex items-center">
              <input
                type="checkbox"
                id="user"
                className="mr-1"
                defaultChecked={roles.includes("USER")}
                onClick={() => updateRole("USER")}
                disabled
              />
              <label htmlFor="user">USER</label>
            </div>
          </div>
        }
        confirmAction={
          <button
            onClick={updateRoleUser}
            className="bg-green-700 text-white px-6 py-2 rounded-lg cursor-pointer hover:bg-green-800"
          >
            Update
          </button>
        }
      />
    </>
  );
};

export default Action;
