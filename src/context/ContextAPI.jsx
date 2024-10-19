import { createContext, useContext, useState } from "react";
import { fetchFromAPI } from "../utils/fetchFromAPI";

export const YoutubeContext = createContext(null);

export const useYoutube = () => useContext(YoutubeContext);

export const YoutubeProvider = ({ children }) => {
  const [selectedFeedCategory, setSelectedFeedCategory] = useState("New");
  const [isOpenMobileSearchBar, setIsOpenMobileSearchBar] = useState(false);
  const [channelDetail, setChannelDetail] = useState(null);
  const [videoDetails, setVideoDetails] = useState(null);
  const [channelVideos, setChannelVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [toolTip, setToolTip] = useState(null);
  const [isShow, setIsShow] = useState(false);
  const [error, setError] = useState(null);
  const [videos, setVideos] = useState([]);

  //this api fetching initial data or feed query and search query
  const fetchInitialData = (query) => {
    setIsLoading(true);

    return fetchFromAPI(`search?part=snippet&q=${query}`)
      .then((data) => {
        setVideos(data.items);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  // fetch channel Details method
  const fetchChannelDetail = (id) => {
    setIsLoading(true);

    return fetchFromAPI(`channels?part=snippet&id=${id}`)
      .then((data) => {
        setChannelDetail(data.items[0]);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  // fetching videos details
  const fetchVideosDetails = (id) => {
    setIsLoading(true);

    return fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
      .then((data) => setVideoDetails(data.items[0]))
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  // fetching  channel videos method
  const fetchChannelVideos = (id) => {
    setIsLoading(true);

    return fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
      .then((data) => {
        setChannelVideos(data.items);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  // fetching  related videos method
  const fetchRelatedVideos = (id) => {
    setIsLoading(true);

    return fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}`)
      .then((data) => {
        if (data?.items && data?.items.length > 0) {
          setVideos(data.items);
        } else {
          setError("No results found for the query."); // Or handle no results in another way
        }
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  // const tryCatchFunction = (api) => {
  //   setIsLoading(true);
  //   return api
  //     .then((data) => {
  //       setIsLoading(false);
  //       return data;
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       setIsLoading(false);
  //       setError(error);
  //       throw error; // Re-throw the error for handling in the calling function
  //     });
  // };

  function convertLongNumToShortNum(num) {
    if (num >= 1000000000) {
      const b = Math.floor(num / 1000000000);
      return `${b}B`;
    } else if (num >= 1000000) {
      const m = Math.floor(num / 1000000);
      return `${m}M`;
    } else if (num >= 1000) {
      const k = Math.floor(num / 1000);
      return `${k}K`;
    } else {
      return num;
    }
  }

  const handleModel = (e) => {
    if (e.currentTarget.hasAttribute("data-three-dot")) {
      setIsShow(!isShow);
    } else {
      setIsShow(false);
    }
  };

  const demoVideoCards = Array.from({ length: 12 }).map((_, index) => index);

  const value = {
    demoVideoCards,
    videos,
    setVideos,
    isLoading,
    setIsLoading,
    selectedFeedCategory,
    setSelectedFeedCategory,
    channelDetail,
    setChannelDetail,
    error,
    setError,
    toolTip,
    setToolTip,
    channelVideos,
    setChannelVideos,
    videoDetails,
    setVideoDetails,
    searchTerm,
    setSearchTerm,
    isOpenMobileSearchBar,
    setIsOpenMobileSearchBar,
    fetchFromAPI,
    fetchInitialData,
    convertLongNumToShortNum,
    handleModel,
    isShow,
    fetchVideosDetails,
    fetchChannelDetail,
    fetchChannelVideos,
    fetchRelatedVideos,
  };

  return (
    <YoutubeContext.Provider value={value}>{children}</YoutubeContext.Provider>
  );
};
