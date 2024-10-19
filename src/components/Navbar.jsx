import { IoReorderThreeOutline } from "react-icons/io5";
import { Button, SearchBar, NavButton } from "./index";
import { navButtons } from "../utils/constants";
import { Link } from "react-router-dom";
import { useYoutube } from "../context/ContextAPI";
import { HiMagnifyingGlass } from "react-icons/hi2";

const StickyNavbar = ({ isOpenSideBar, setIsOpenSideBar }) => {
  const { setIsOpenMobileSearchBar } = useYoutube();

  const navIconSize = 26;

  return (
    <header className="relative h-14 w-full flex items-center ">
      <nav className="sticky top-0 h-max w-full  rounded-none  px-4 py-0 lg:px-[1.3rem]">
        <div className=" flex items-center justify-between text-blue-neutral-900 mx-1">
          {/* left side toggle menu icon or youtube logo link */}
          <div className="flex justify-center items-center  ">
            <div className="hidden md:block mr-2">
              <button
                onClick={() => setIsOpenSideBar(!isOpenSideBar)}
                className=" hover:bg-neutral-800 active:bg-neutral-700 hover:text-neutral-200 p-1.5 rounded-full transition-all duration-300 ease-in-out flex justify-center items-center "
              >
                <IoReorderThreeOutline size={30} />
              </button>
            </div>

            <Link to={"/"}>
              <img
                src="youtube-logo-with-title.png"
                alt="logo"
                className="h-14 "
              />
            </Link>
          </div>

          {/* Search Bar Component */}
          <SearchBar />

          {/* when width size less then 'md:' then show this  */}
          <div className="flex items-center gap-1.5 md:hidden">
            <Button
              onClick={() => setIsOpenMobileSearchBar(true)}
              icon={<HiMagnifyingGlass size={24} />}
              className="text-black"
            />
          </div>

          {/* right side nav Links */}
          <div className="hidden md:block  ">
            <div className="flex md:gap-1.5">
              {navButtons.map((link) => (
                <NavButton key={link.name} link={link} size={navIconSize} />
              ))}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default StickyNavbar;
