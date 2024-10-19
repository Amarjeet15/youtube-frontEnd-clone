import { useEffect } from "react";
import { useYoutube } from "../context/ContextAPI";
import { LargeSearchBar, MobileSearchBar } from "./index";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const {
    searchTerm,
    setSearchTerm,
    isOpenMobileSearchBar,
    setIsOpenMobileSearchBar,
  } = useYoutube();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
      setSearchTerm("");
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 719) {
        setIsOpenMobileSearchBar(false);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      <form onSubmit={handleSubmit}>
        <LargeSearchBar />
        {isOpenMobileSearchBar && <MobileSearchBar />}
      </form>
    </>
  );
};

export default SearchBar;
