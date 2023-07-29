import { Link, useNavigate } from "react-router-dom";
import Input from "../Input/Input";
import {FaUser} from 'react-icons/fa'
import { BsHeartFill } from "react-icons/bs";
import { userAuth } from "../../context/AuthContext";
import {
  MdNotifications,
  MdSettings,
  MdMenu,
  MdClose,
  MdOutlineArrowDropDown,
  MdOutlineLogin,
} from "react-icons/md";
import { userAvatar } from "../getAllImage";
import { useState } from "react";
const Header = () => {
  const navigate = useNavigate();
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);
  const { user, logOut } = userAuth();
  const logoutHandler = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <header className="h-38 lg:h-28 bg-white border-b-2">
      <nav className="mx-auto flex items-center justify-between p-6 lg:px-12 max-w-screen-2xl">
        <div className="flex lg:flex-1 items-center gap-x-8">
          <div className="basis-1/4">
            <Link to="/">
              <span className="sr-only">MORENT</span>
              <h2 className="text-blue-500 text-2xl lg:text-3xl font-bold font-plusJakarta">
                MORENT
              </h2>
            </Link>
          </div>
          <div className="hidden md:block lg:basis-3/4">
            <Input />
          </div>
        </div>

        <div className="flex lg:hidden">
          <button
            onClick={() => setIsOpenSidebar(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <MdMenu fontSize={"28px"} />
          </button>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-x-4">
          <div className="bg-white w-11 h-11 rounded-full border border-borderColor flex justify-center items-center">
            <BsHeartFill fontSize={"20px"} color="rgb(89,103,128)" />
          </div>
          <div className="bg-white w-11 h-11 rounded-full border border-borderColor flex justify-center items-center">
            <MdNotifications fontSize={"24px"} color="rgb(89,103,128)" />
          </div>
          <div className="bg-white w-11 h-11 rounded-full border border-borderColor flex justify-center items-center">
            <MdSettings fontSize={"24px"} color="rgb(89,103,128)" />
          </div>

          {user?.email ? (
            <button
              onClick={() => navigate("/login")}
              className="flex  items-center  gap-x-3 bg-blue-500 text-white rounded py-2 px-4 hover:bg-white hover:text-black hover:border hover:border-blue-500"
            >
              <MdOutlineLogin fontSize={"20px"} />
              Log In
            </button>
          ) : (
              <>
                

              <div className="inline-flex bg-white border rounded-md">
                <button
                  href="#"
                  className="px-2 py-2 text-sm text-gray-600 hover:text-gray-700 hover:bg-gray-50 rounded-l-md"
                >
                  <FaUser fontSize={"20px"} />
                </button>

                <div className="relative">
                  <button
                    onClick={() => setIsOpenDropdown(!isOpenDropdown)}
                    type="button"
                    className="inline-flex items-center justify-center h-full  text-gray-600  border-gray-100 hover:text-gray-700 rounded-r-md hover:bg-gray-50"
                  >
                    <MdOutlineArrowDropDown fontSize={"30px"} />
                  </button>
                  {isOpenDropdown && (
                    <div className="absolute -right-40 z-10 w-56 mt-2 origin-top-right bg-white border border-gray-100 rounded-md shadow-lg">
                      <div className="p-2">
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700"
                        >
                          ReactJS Dropdown 1
                        </a>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700"
                        >
                            Log Out
                            <MdOutlineLogin font/>
                        </a>
                      </div>
                    </div>
                  )}
                </div>
                </div>
                


              <button
                onClick={() => navigate("/signup")}
                className="flex  items-center  gap-x-3 bg-blue-500 text-white rounded py-2 px-4 hover:bg-white hover:text-black hover:border hover:border-blue-500"
              >
                <MdOutlineLogin fontSize={"20px"} />
                Sign up
              </button>
            </>
          )}
        </div>
      </nav>
      <div className="md:hidden">
        <Input />
      </div>

      {/* opened menu */}
      {isOpenSidebar && (
        <div role="dialog" aria-modal="true">
          <div className="fixed inset-0 z-70"></div>
          <div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-end">
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setIsOpenSidebar(false)}
              >
                <span className="sr-only">Close menu</span>
                <MdClose fontSize={"28px"} />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <Link
                    to="#"
                    className="flex flex-row -mx-3 items-center font-plusJakarta gap-2 rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    <BsHeartFill fontSize={"18px"} />
                    Favorite
                  </Link>
                  <Link
                    to="#"
                    className="flex flex-row -mx-3 items-center font-plusJakarta gap-2 rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    <MdSettings fontSize={"20px"} />
                    Setting
                  </Link>
                  <Link
                    to="#"
                    className="flex flex-row -mx-3 items-center gap-2 rounded-lg px-3 py-2 text-base font-plusJakarta font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    <MdNotifications fontSize={"20px"} />
                    Inbox
                  </Link>
                </div>
                <div className="py-6 flex">
                  {/* {user ?.email ? () : ()} */}
                  <div
                    onClick={logoutHandler}
                    className="flex flex-row justify-center -mx-3 items-center gap-2 rounded-lg px-3 py-2.5 font-plusJakarta text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    <MdOutlineLogin fontSize={"20px"} color="red" />
                    Log out
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
