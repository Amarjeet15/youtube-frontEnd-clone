import { Link } from "react-router-dom";
import { largeSideBarLink, smallSideBarLink } from "../utils/constants";
import { useYoutube } from "../context/ContextAPI";

const SideBar = ({ isOpenSideBar }) => {
  return (
    <aside
      className={`absolute md:relative  left-0 bottom-0 right-0   items-center  md:items-start overflow-y-auto hide_scrollbar ${
        isOpenSideBar ? "md:justify-start" : "md:justify-center"
      } `}
    >
      <div className={` ${isOpenSideBar && "md:ml-[.45rem] lg:ml-[.75rem]"}`}>
        {isOpenSideBar ? <LargeSideBar /> : <MiniSideBar />}
      </div>
    </aside>
  );
};

export default SideBar;

const LargeSideBar = () => {
  return (
    <div className="mb-1">
      <LargeSideBarLink />
    </div>
  );
};

const MiniSideBar = () => {
  return (
    <div
      className={`flex justify-evenly items-center h-12 md:h-auto md:flex-col md:justify-stretch md:gap-3  md:ml-1 lg:ml-1   bg-white`}
    >
      <MiniSideBarLink />
    </div>
  );
};

const LargeSideBarLink = () => {
  const { selectedFeedCategory, setSelectedFeedCategory } = useYoutube();

  return (
    <>
      {largeSideBarLink.map((link) => (
        <Link
          to={link.to && link.to}
          onClick={() => setSelectedFeedCategory(link.link && link.link)}
          key={link.name}
          className={`flex items-center justify-start gap-3  hover:bg-neutral-800 active:bg-neutral-900   ${
            selectedFeedCategory === link.link &&
            link.link &&
            "text-neutral-200 bg-neutral-900"
          } hover:text-neutral-200 pl-[1.4rem] lg:pl-[1.45rem] py-2.5 rounded-[.4rem] transition-all duration-100 ease-in-out`}
        >
          <link.icon size={22} />
          <p className="text-sm font-semibold">{link.name}</p>
        </Link>
      ))}
    </>
  );
};

const MiniSideBarLink = () => {
  return (
    <>
      {smallSideBarLink.map((link) => (
        <Link
          to={link.to && link.to}
          key={link.name}
          className="flex flex-col items-center size-[4.3rem] md:w-full md:size-auto justify-center active:text-neutral-200 active:bg-neutral-800 md:hover:text-neutral-200 md:hover:bg-neutral-800 md:active:text-neutral-100 md:active:bg-neutral-900  md:py-2.5  rounded-full  lg:ml-[.1rem] md:rounded-[.65rem] transition-all duration-100 ease-in-out outline-none"
        >
          <span className="hidden md:block">{<link.icon size={22} />}</span>
          <span className=" md:hidden">{<link.icon size={19} />}</span>
          <p className="text-[.6rem] md:text-[.71rem] font-semibold">
            {link.name}
          </p>
        </Link>
      ))}
    </>
  );
};

export const LoadingMiniSideBarLink = () => {
  return (
    <>
      {smallSideBarLink.map((link) => (
        <span
          key={link.name}
          className="flex flex-col items-center mt-1.5 ml-1.5 mr-1 size-[4.3rem] md:size-auto bg-neutral-800 text-neutral-800 justify-center px-5 py-2 md:p-2.5 rounded-full md:rounded-[.65rem] transition-all duration-100 ease-in-out outline-none select-none overflow-hidden "
        >
          {<link.icon />}
          <p className="text-[.6rem] md:text-[.71rem] font-semibold">
            {link.name}
          </p>
        </span>
      ))}
    </>
  );
};
