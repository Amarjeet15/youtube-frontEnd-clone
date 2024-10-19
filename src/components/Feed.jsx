import { feedCategories } from "../utils/constants";
import { useYoutube } from "../context/ContextAPI";

import { Videos, Error } from "./index";

import { Link } from "react-router-dom";
const Feed = () => {
  const { selectedFeedCategory, setSelectedFeedCategory, error } = useYoutube();

  if (error) {
    return <Error />;
  }

  return (
    <div className="flex flex-col  overflow-hidden">
      <div className=" flex items-center gap-2.5 h-8 px-1 py-5 hide_scrollbar overflow-y-hidden overflow-x-auto">
        <FeedLink
          selectedFeedCategory={selectedFeedCategory}
          setSelectedFeedCategory={setSelectedFeedCategory}
        />
      </div>
      <Videos />
    </div>
  );
};

export default Feed;

// Feed link component
const FeedLink = ({ selectedFeedCategory, setSelectedFeedCategory }) => {
  return (
    <>
      {feedCategories.map((link) => (
        <Link
          key={link.name}
          onClick={() => setSelectedFeedCategory(link.name)}
          className={` ${
            selectedFeedCategory === link.name
              ? "bg-red-600"
              : " bg-neutral-800 active:bg-red-500 hover:bg-red-600 "
          }  text-neutral-50    px-5 pb-[.25rem] pt-[.21rem]  rounded-full  font-semibold text-[.68rem] md:text-[.77rem] transition-all duration-100 ease-in-out outline-none `}
        >
          {link.name}
        </Link>
      ))}
    </>
  );
};

export const LoadingFeed = () => {
  return (
    <>
      {feedCategories.map((link) => (
        <span
          key={link}
          className=" bg-neutral-800 text-neutral-800 px-5 pb-[.25rem] pt-[.21rem] rounded-full font-semibold text-[.68rem] md:text-[.77rem]  select-none overflow-hidden"
        >
          {link.name}
        </span>
      ))}
    </>
  );
};
