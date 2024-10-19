import { useYoutube } from "../context/ContextAPI";
import LoadingVideoCard from "./LoadingVideoCard";
import { useParams } from "react-router-dom";
import { VideoCard, Error } from "./index";
import { useEffect } from "react";

const SearchFeed = () => {
  const { videos, demoVideoCards, isLoading, error, fetchInitialData } =
    useYoutube();

  const { searchTerm } = useParams();

  useEffect(() => {
    fetchInitialData(searchTerm);
  }, [searchTerm]);

  if (error) {
    return <Error />;
  }

  return (
    <div className="overflow-auto">
      <div className=" ml-4 mt-2">
        <p>
          Search Result for :
          <span className="font-semibold mx-1">{searchTerm} </span>videos
        </p>
      </div>
      <div className="search-videos videos_grid mt-2.5 overflow-auto  ">
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
    </div>
  );
};

export default SearchFeed;
