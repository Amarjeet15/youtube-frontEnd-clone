import { HiArrowLongLeft, HiMagnifyingGlass } from "react-icons/hi2";
import { useYoutube } from "../context/ContextAPI";
import { Button } from "./index";

const MobileSearchBar = () => {
  const { searchTerm, setSearchTerm, setIsOpenMobileSearchBar } = useYoutube();

  return (
    <div className="absolute top-0 right-0 left-0 bottom-0 w-full bg-neutral-900 z-10 flex  items-center  px-[4vw] md:hidden">
      <div className="flex w-full">
        {/* left pointed arrow button */}
        <Button
          onClick={() => setIsOpenMobileSearchBar(false)}
          icon={<HiArrowLongLeft size={24} />}
          className={"text-white"}
        />

        <input
          type="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search..."
          className="w-full bg-transparent outline-none ml-2 text-neutral-200"
        />

        {/* search button */}
        <Button
          icon={<HiMagnifyingGlass size={24} />}
          className={
            "text-white  active:bg-neutral-800 p-2 rounded-full transition-all duration-300 ease-in-out"
          }
        />
      </div>
    </div>
  );
};

export default MobileSearchBar;
