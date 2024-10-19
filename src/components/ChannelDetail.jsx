import { useParams } from "react-router-dom";
import { useYoutube } from "../context/ContextAPI";
import { useEffect } from "react";
import { LoadingVideoCard, VideoCard, Error } from "./index";

const ChannelDetail = () => {
  const {
    channelDetail,
    channelVideos,
    isLoading,
    demoVideoCards,
    error,
    fetchChannelDetail,
    fetchChannelVideos,
  } = useYoutube();

  const { id } = useParams();

  useEffect(() => {
    fetchChannelVideos(id);
    fetchChannelDetail(id);
  }, [id]);

  if (error) {
    return <Error />;
  }

  return (
    <div className=" overflow-auto mt-2">
      <header className="relative">
        {/* -------- channel banner ------- */}

        {isLoading ? (
          <>
            <div className="loading_banner h-28 md:h-40  mx-2 rounded-2xl bg-gradient-to-tr "></div>
          </>
        ) : (
          <>
            <div className="h-28 md:h-40 flex  items-center justify-center mx-2 transition-all duration-300 ease-in-out rounded-2xl overflow-hidden ">
              <img
                src={channelDetail?.brandingSettings?.image?.bannerExternalUrl}
                alt={channelDetail?.brandingSettings?.image?.bannerExternalUrl}
                className="w-full h-full object-cover"
              />
            </div>
          </>
        )}
      </header>

      <ChannelProfileCard isLoading={isLoading} channelDetail={channelDetail} />

      <div className="channel-videos videos_grid mt-5 ">
        {isLoading &&
          demoVideoCards.map((_, idx) => <LoadingVideoCard key={idx} />)}

        {!isLoading &&
          channelVideos &&
          channelVideos.map((item, idx) => (
            <div key={idx}>
              {item.id.videoId && <VideoCard key={idx} video={item} />}
            </div>
          ))}
      </div>
    </div>
  );
};

export default ChannelDetail;

const ChannelProfileCard = ({ channelDetail, isLoading }) => {
  const { convertLongNumToShortNum } = useYoutube();

  const subscriberCount = channelDetail?.statistics?.subscriberCount;

  // console.log(channelDetail);

  let totalSubscribers = convertLongNumToShortNum(subscriberCount);

  return (
    <div className="bg-black/20   px-5 rounded-2xl lg:rounded-[1.2rem] py-1.5 md:py-2.5 backdrop-blur-3xl mt-3 mx-2">
      {isLoading ? (
        <LoadingChannelCard />
      ) : (
        <>
          {" "}
          <div className="flex items-center gap-4">
            {/* ------channel profile----------- */}
            <img
              className="profile_img size-20 md:size-32 rounded-full object-cover  transition-all duration-300 ease-in-out "
              src={channelDetail?.snippet?.thumbnails?.high?.url}
              alt={channelDetail?.snippet?.title}
            />

            <div className="profile_body flex flex-col gap-1 md:gap-2 ">
              {/* ----------channel name----------- */}
              <h1 className="font-semibold text-base md:text-lg text-neutral-800  ">
                {channelDetail?.snippet?.title}
              </h1>
              {/* ------channel description--------- */}
              <p
                title={channelDetail?.brandingSettings?.channel?.description}
                className="text-[.7rem] md:text-sm font-medium text-neutral-700 line-clamp-2 "
              >
                {channelDetail?.brandingSettings?.channel?.description}
              </p>

              {/* -----channel subscribers------ */}
              <p className=" text-[.7rem] md::text-[.9rem]  text-neutral-700 font-bold ">
                {totalSubscribers} Subscribers
              </p>
            </div>
          </div>{" "}
        </>
      )}
    </div>
  );
};

const LoadingChannelCard = () => {
  return (
    <div className="flex  items-center gap-4">
      <div className="loading_profile size-20 md:size-32 rounded-full bg-neutral-400 bg-black/20  "></div>
      <div className="w-full">
        <div className="loading_channel_title h-4 w-32 bg-neutral-400 bg-black/20 rounded-md mb-3"></div>
        <div className="loading_channel_title h-4 w-full bg-neutral-400 bg-black/20 rounded-md mb-3"></div>

        <div className="loading-subscribers h-3 w-32 bg-neutral-400 bg-black/20 rounded-md"></div>
      </div>
    </div>
  );
};
