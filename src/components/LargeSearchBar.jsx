import { HiMagnifyingGlass } from "react-icons/hi2";
import { useYoutube } from "../context/ContextAPI";
import { Button } from "./index";

const LargeSearchBar = () => {
  const { searchTerm, setSearchTerm } = useYoutube();

  return (
    <div className="hidden md:block md:w-[50vw] lg:w-[47vw] transition-all duration-300 ease-in-out ">
      <div className="flex items-center gap-4 border-y border-l border-neutral-800 pl-4 rounded-full ">
        <input
          type="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search..."
          className="outline-none w-full placeholder:text-neutral-900  "
        />

        <Button
          icon23={
            <HiMagnifyingGlass
              size={23}
              className="text-white hidden lg:block"
            />
          }
          icon20={
            <HiMagnifyingGlass size={20} className="text-white lg:hidden" />
          }
          className="bg-neutral-800 border active:bg-neutral-900 border-neutral-800 rounded-r-full px-4 lg:px-7 outline-none py-1.5 lg:py-[.46rem] transition-all duration-300 ease-in-out"
        />
      </div>
    </div>
  );
};

export default LargeSearchBar;
