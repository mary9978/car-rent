import { BsSearch, BsFilter } from "react-icons/bs";

function Input() {
    return (
      <div className="flex bg-white md:w-80 mx-auto lg:mx-0 justify-between p-4 my-4 md:my-0 rounded-3xl items-center border max-w-sm">
        <BsSearch size={"20px"} />
        <input className="outline-0" type="text" placeholder="Search something here" />
        <BsFilter size={"28px"} />
      </div>
    );
}

export default Input;