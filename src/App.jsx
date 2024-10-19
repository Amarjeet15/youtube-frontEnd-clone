import { useEffect, useState } from "react";
import {
  ChannelDetail,
  Feed,
  Navbar,
  SearchFeed,
  SideBar,
  VideoDetail,
} from "./components";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  const [isOpenSideBar, setIsOpenSideBar] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => innerWidth > 719 && setIsOpenSideBar(false)
    );
  }, []);

  return (
    <BrowserRouter>
      <div className="relative h-svh w-full">
        <Navbar
          isOpenSideBar={isOpenSideBar}
          setIsOpenSideBar={setIsOpenSideBar}
        />
        <main
          className={`w-full overflow-y-auto main_height grid hide_scrollbar  ${
            isOpenSideBar
              ? "md:grid-cols-[199px,auto]"
              : `md:grid-cols-[77px,auto] lg:grid-cols-[87px,auto]`
          } `}
        >
          <SideBar isOpenSideBar={isOpenSideBar} />
          <Routes>
            <Route path="/" element={<Feed />} />
            <Route path="/video/:id" element={<VideoDetail />} />
            <Route path="/channel/:id" element={<ChannelDetail />} />
            <Route path="/search/:searchTerm" element={<SearchFeed />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
