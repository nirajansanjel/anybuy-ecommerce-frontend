"use client";
import { RxCross2 } from "react-icons/rx";
import { CgDanger } from "react-icons/cg";

const Modal = ({
  showModal,
  setShowModal,
  label,
  icon,
  info,
  confirmAction,
}) => {
  function closeModal() {
    setShowModal(false);
  }
  return (
    <div className={showModal ? "" : "hidden"}>
      <div
        id="popup-modal"
        tabIndex={-1}
        className="flex overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <div className="bg-black fixed top-0 left-0 right-0 bottom-0 opacity-20"></div>
        <div className="relative p-4 w-full max-w-md max-h-full">
          <div className="relative bg-white  rounded-2xl shadow-sm p-4 md:p-6">
            <button
              className="absolute top-3 end-2.5 text-body bg-transparent hover:bg-neutral-tertiary hover:text-heading rounded-base text-sm w-9 h-9 ms-auto inline-flex justify-center items-center"
              onClick={closeModal}
            >
              <RxCross2 className="w-5 h-5" />

              <span className="sr-only">Close modal</span>
            </button>
            <div className="p-4 md:p-5 text-center">
              {icon}

              <h3 className="mb-6 text-body">{label}</h3>
              <div className="flex items-center space-x-4 justify-center">
               {confirmAction}
                <button
                  onClick={closeModal}
                  className="text-body bg-zinc-200   shadow-xs font-medium leading-5 rounded-xl border border-zinc-300 text-sm px-4 py-2.5 "
                >
                  No, cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
