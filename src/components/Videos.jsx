import { useEffect, useRef } from "react";
import { useYoutube } from "../context/ContextAPI";
import { VideoCard, LoadingVideoCard } from "./index";

const Videos = () => {
  const videoDevRef = useRef(null);
  const {
    videos,
    isLoading,
    selectedFeedCategory,
    demoVideoCards,
    fetchInitialData,
  } = useYoutube();

  // adding this class "hide_scrollbar" when window width less then 720px in the "video_div"
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 720) {
        videoDevRef.current.classList.add("hide_scrollbar");
      } else {
        videoDevRef.current.classList.remove("hide_scrollbar");
      }
    };

    // initial check
    handleResize();

    window.addEventListener("resize", handleResize);

    // cleanup event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    fetchInitialData(selectedFeedCategory);
  }, [selectedFeedCategory]);

  return (
    <section ref={videoDevRef} className="video_div w-full  overflow-y-auto ">
      <div className="videos_grid  w-full h-full transition-all duration-300 ease-in-out overflow-y-scroll ">
        {isLoading &&
          demoVideoCards.map((_, idx) => <LoadingVideoCard key={idx} />)}

        {!isLoading &&
          videos &&
          videos.map((item, idx) => (
            <div key={idx}>
              {item.id.videoId && <VideoCard key={idx} video={item} />}
            </div>
          ))}
      </div>
    </section>
  );
};

export default Videos;
