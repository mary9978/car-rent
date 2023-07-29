import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="bottom-0 right-0 left-0 py-7  bg-white">
      <div className="mb-4 grid md:grid-cols-6 grid-cols-2 md:gap-y-0 gap-y-8 max-w-screen-2xl px-12 mx-auto">
        <div className="md:col-span-3 col-span-2 md:my-0 my-4">
          <div className="grid grid-cols-4">
            <div className="lg:col-span-2 col-span-3">
              <h2 className="font-plusJakarta font-bold text-3xl text-blue-500">
                MORENT
              </h2>
              <p className="leading-6 text-sm font-plusJakarta text-gray-500 font-medium py-4">
                Our vision is to provide convenience and help increase your
                sales business.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg">About</h3>
          <div className="grid gap-y-5 mt-5">
            <a className="font-plusJakarta text-grayLight font-medium">
              How it works
            </a>
            <a className="font-plusJakarta text-grayLight font-medium">
              Featured
            </a>
            <a className="font-plusJakarta text-grayLight font-medium">
              Partnership
            </a>
            <a className="font-plusJakarta text-grayLight font-medium">
              Bussiness Relation
            </a>
          </div>
        </div>

        <div className="mx-auto md:mx-0">
          <h3 className="text-lg">Community</h3>
          <div className="grid gap-y-5 mt-5">
            <a className="font-plusJakarta text-grayLight font-medium">
              Events
            </a>
            <a className="font-plusJakarta text-grayLight font-medium">Blog</a>
            <a className="font-plusJakarta text-grayLight font-medium">
              Podcast
            </a>
            <a className="font-plusJakarta text-grayLight font-medium">
              Invite a friend
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-lg">Socials</h3>
          <div className="grid gap-y-5 mt-5">
            <a className="font-plusJakarta text-grayLight font-medium">
              Discord
            </a>
            <a className="font-plusJakarta text-grayLight font-medium">
              Instagram
            </a>
            <a className="font-plusJakarta text-grayLight font-medium">
              Twitter
            </a>
            <a className="font-plusJakarta text-grayLight font-medium">
              Facebook
            </a>
          </div>
        </div>
      </div>
      <hr />
      <div className="my-4 flex flex-col md:flex-row md:justify-between max-w-screen-2xl px-12 mx-auto">
        <div>
          <h2 className="text-center font-plusJakarta text-base">
            ©2022 MORENT. All rights reserved
          </h2>
        </div>
        <div className="flex gap-x-8 my-4 justify-center">
          <Link className="text-center" to="">
            Privacy & Policy
          </Link>
          <Link className="text-center" to="">
            Terms & Condition
          </Link>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
