import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useYoutube } from "../context/ContextAPI";
import {
  videoDetailsIcon,
  demoThumbnailUrl,
  demoChannelTitle,
  demoChannelUrl,
  demoProfilePicture,
  demoVideoTitle,
  demoVideoUrl,
} from "../utils/constants";
import { Error, LoadingVideoCard } from "./index";
import ReactPlayer from "react-player";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const VideoDetail = () => {
  const [isExpand, setIsExpand] = useState(false);

  const {
    isLoading,
    error,
    channelDetail,
    setChannelDetail,
    videos,
    videoDetails,
    demoVideoCards,
    convertLongNumToShortNum,
    handleModel,
    isShow,
    fetchVideosDetails,
    fetchRelatedVideos,
  } = useYoutube();

  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) => {
      setChannelDetail(data.items[0]);
    });

    fetchVideosDetails(id);
    fetchRelatedVideos(id);
  }, [id]);

  if (error) {
    return <Error />;
  }

  const subscriberCount = channelDetail?.statistics?.subscriberCount;
  const likesCount = videoDetails?.statistics?.likeCount;
  const viewCount = videoDetails?.statistics?.viewCount;

  let likesInShort = convertLongNumToShortNum(likesCount);
  let viewsInShort = convertLongNumToShortNum(viewCount);
  let totalSubscribers = convertLongNumToShortNum(subscriberCount);

  return (
    <div className="lg:grid lg:grid-cols-[70%,auto] gap-3 transition-all duration-300 ease-in-out overflow-auto lg:px-10">
      <section className="">
        {/* video wrapper container */}
        <div className="video_wrapper bg-neutral-800 md:rounded-xl overflow-hidden transition-all duration-300 ease-in-out ">
          <ReactPlayer
            width="100%"
            height="100%"
            url={`https://www.youtube.com/watch?v=${id}`}
            controls
          />
        </div>
        <div className="video-body flex flex-col gap-4 px-2 mt-1.5 ">
          {/* --------channel title---------- */}
          <h1 className="line-clamp-2 font-semibold md:text-lg ">
            {videoDetails?.snippet?.title}
          </h1>

          {/* --------channel img or name -------- */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-center">
            <div className=" w-full flex justify-between items-center">
              <div className="w-full md:w-max flex justify-between items-center gap-2 md:gap-3">
                <div className="flex items-center gap-2">
                  {isLoading ? (
                    <>
                      <div className="size-10 bg-neutral-800 rounded-full"></div>{" "}
                    </>
                  ) : (
                    <>
                      {/* ------channel img----- */}
                      <Link to={`/channel/${videoDetails?.snippet?.channelId}`}>
                        <img
                          title={videoDetails?.snippet?.channelTitle}
                          src={videoDetails?.snippet?.thumbnails?.high?.url}
                          alt=""
                          className="size-10  rounded-full object-cover"
                        />
                      </Link>
                    </>
                  )}
                  <div className="">
                    {/* ----channel name------ */}

                    {isLoading ? (
                      <>
                        <div className="loading_channel_name h4 w-32  bg-neutral-800 "></div>{" "}
                      </>
                    ) : (
                      <>
                        {" "}
                        <Link
                          to={`/channel/${videoDetails?.snippet?.channelId}`}
                        >
                          <p
                            title={videoDetails?.snippet?.channelTitle}
                            className="sm:max-w-56   md:text-base font-bold line-clamp-1"
                          >
                            {videoDetails?.snippet?.channelTitle}
                          </p>
                        </Link>
                      </>
                    )}

                    {/* -----subscriber count-------- */}
                    {isLoading ? (
                      <>
                        {" "}
                        <div className="loading_channel_name h4 w-32 md:w-56 bg-neutral-800 "></div>
                      </>
                    ) : (
                      <>
                        <p className="text-[.7rem] lg:text-[.9rem] font-bold text-neutral-700 ">
                          {totalSubscribers} Subscribers
                        </p>
                      </>
                    )}
                  </div>
                </div>

                {/* -----subscribe btn------ */}

                {isLoading ? (
                  <>
                    {" "}
                    <div className="px-3 py-[.45rem] rounded-full  text-[.8rem] md:text-[.9rem] active:bg-neutral-700 bg-neutral-800 text-neutral-800 select-none">
                      Subscribe
                    </div>
                  </>
                ) : (
                  <>
                    {" "}
                    <button className="px-3 py-[.45rem] rounded-full  text-[.8rem] md:text-[.9rem] active:bg-neutral-700 bg-neutral-800 text-neutral-100">
                      Subscribe
                    </button>
                  </>
                )}
              </div>
            </div>

            {/* ------links, dislikes and more buttons-------- */}
            <div className="flex justify-between items-center gap-3 mt-2 md:mt-0 ">
              {/* -------video view count --------- */}
              <div className="font-bold text-neutral-700 flex items-center gap-1 ">
                {viewsInShort} <span className="text-sm">Views</span>
              </div>
              <div className="flex gap-2">
                {/* -----like ro dislike div -------------- */}
                <div className="flex justify-between gap-[.01rem] bg-neutral-800 *:text-neutral-100 rounded-full   ">
                  {/* ------like btn--------- */}
                  <button className="flex items-center gap-1 active:bg-neutral-700 rounded-l-full py-[.43rem] h-full px-4">
                    <span className="text-[.7rem] md:text-[.9rem]">
                      {likesInShort}
                    </span>
                    <AiOutlineLike size={20} />
                  </button>

                  {/* --------vertical line ------ */}
                  <div className="bg-neutral-100  w-[.01rem] mr-[.1rem]"></div>
                  {/* -----dislike btn ------- */}
                  <button className="active:bg-neutral-700 rounded-r-full h-full py-[.43rem] px-4">
                    <AiOutlineDislike size={20} />
                  </button>
                </div>
                {/* ------- three dot btn -------- */}
                <div className="relative">
                  <button
                    data-three-dot="three dot"
                    onClick={(e) => handleModel(e)}
                    className="bg-neutral-800 active:bg-neutral-700 text-neutral-100 rounded-full h-full  px-4"
                  >
                    <BsThreeDotsVertical size={20} />
                  </button>
                  {isShow && (
                    <div className=" absolute bg-neutral-700 p-1.5  w-max  right-0 bottom-12 rounded-[.4rem] ">
                      {videoDetailsIcon.map((item) => (
                        <button
                          key={item.name}
                          className="px-4 py-[0.43rem] rounded-md text-sm md:text-base  w-full hover:bg-neutral-800 active:bg-neutral-600 text-neutral-100 flex items-center gap-1 transition-all duration-100 ease-in-out"
                        >
                          <item.icon size={20} />
                          <span className="w-full text-start">{item.name}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* -----video-description----- */}
          <div className="video-description bg-neutral-800  rounded-md">
            {isLoading && <div className="description h-24 bg"></div>}
            {!isLoading && (
              <>
                <p
                  className={`text-neutral-200 text-sm  p-2  ${
                    isExpand
                      ? "h-max overflow-x-auto hide_scrollbar"
                      : "line-clamp-3"
                  } `}
                >
                  {videoDetails?.snippet?.description}
                </p>
                <button
                  onClick={() => setIsExpand(!isExpand)}
                  className="text-[.75rem]  font-medium  text-neutral-800 bg-neutral-200 px-3  pt-[.05rem] pb-[.14rem] m-2 outline-none  rounded-full"
                >
                  {isExpand ? "Show less" : "Show more"}
                </button>
              </>
            )}
          </div>
        </div>
      </section>

      {/* ------related videos section */}

      <section className="p-2 grid grid-cols-2  sm:grid-cols-3  md:grid-cols-3 lg:grid-cols-1 gap-3 pb-20 md:pb-1  ">
        {isLoading &&
          demoVideoCards.map((_, idx) => <LoadingVideoCard key={idx} />)}

        {!isLoading &&
          videos &&
          videos.map((item, idx) => (
            <div key={idx}>
              <Link to={item.id.videoId && `/video/${item.id.videoId}`}>
                <article className="video-card h-full  border-black w-full  transition-all duration-100 ease-in-out">
                  <header className="w-full h-28 md:h-32  lg:h-44">
                    {/*-------------- video thumbnail ------------- */}
                    {!isLoading ? (
                      <img
                        src={
                          item.snippet?.thumbnails?.high?.url ||
                          demoThumbnailUrl
                        }
                        alt={item.snippet?.title}
                        className="w-full h-full object-cover rounded-md"
                      />
                    ) : (
                      <div className="loading_img w-full h-full bg-neutral-800 rounded-md"></div>
                    )}
                  </header>
                  <div className="video-card-content p-1 grid grid-cols-[50px,1fr]  mt-1">
                    {/* --------------- channel profile --------------- */}
                    <Link
                      to={
                        item.snippet?.channelId &&
                        `/channel/${item.snippet?.channelId || demoChannelUrl}`
                      }
                    >
                      <img
                        src={
                          item.snippet?.thumbnails?.high?.url ||
                          demoProfilePicture
                        }
                        className="size-10 hover:bg-neutral-400 object-cover rounded-full p-[.1rem] 
                 "
                        alt=""
                      />
                    </Link>
                    <div className="content overflow-x-auto">
                      {/*----------- video title --------------- */}
                      <Link
                        to={
                          item.id.videoId &&
                          `/video/${item.id.videoId || demoVideoUrl}`
                        }
                      >
                        <h2 className="video-card-title line-clamp-2 leading-[1.2rem] mb-1 font-semibold ">
                          {item.snippet?.title || demoVideoTitle}
                        </h2>
                      </Link>

                      {/*----------- channel title --------------- */}
                      <Link
                        to={
                          item.snippet?.channelId &&
                          `/channel/${
                            item.snippet?.channelId || demoChannelUrl
                          }`
                        }
                      >
                        <h5 className="video-card-title  text-neutral-600 line-clamp-1 leading-[1rem] text-[.789rem]  font-bold hover:text-neutral-800 w-fit">
                          {item.snippet?.channelTitle || demoChannelTitle}
                        </h5>
                      </Link>
                    </div>
                  </div>
                </article>
              </Link>
            </div>
          ))}
      </section>
    </div>
  );
};

export default VideoDetail;
