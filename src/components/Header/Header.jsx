import { Link } from "react-router-dom";
import Input from "../Input/Input";
import { BsHeartFill } from 'react-icons/bs';
import {
  MdNotifications,
  MdSettings,
  MdMenu,
  MdClose,
  MdOutlineLogin
} from "react-icons/md";
import {userAvatar} from '../getAllImage';
import { useState } from "react";
const Header = () => {
    const [isOpenSidebar, setIsOpenSidebar] = useState(false);
    return (
      <header className="h-38 lg:h-28 bg-white border-b-2">
        <nav className="mx-auto   flex items-center justify-between p-6 lg:px-8">
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
              type="button"
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
            <div>
              <img src={userAvatar} alt="" width={"44px"} height={"44px"} />
            </div>
          </div>
        </nav>
        <div className="md:hidden">
          <Input />
        </div>

        {/* opened menu */}
        {isOpenSidebar && (
          <div role="dialog" aria-modal="true">
            <div className="fixed inset-0 z-10"></div>
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
                    <Link
                      to="#"
                      className="flex flex-row justify-center -mx-3 items-center gap-2 rounded-lg px-3 py-2.5 font-plusJakarta text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      <MdOutlineLogin fontSize={'20px'} color="red"/>
                      Log out
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    );
}
 
export default Header;