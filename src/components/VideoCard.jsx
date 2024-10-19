import { Link } from "react-router-dom";
import {
  demoChannelTitle,
  demoChannelUrl,
  demoProfilePicture,
  demoThumbnailUrl,
  demoVideoTitle,
  demoVideoUrl,
} from "../utils/constants";
import { useYoutube } from "../context/ContextAPI";

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  const { isLoading } = useYoutube();

  return (
    <>
      <Link to={videoId && `/video/${videoId || demoVideoUrl}`}>
        <article className="video-card h-full  border-black w-full    transition-all duration-100 ease-in-out   ">
          <header className="w-full h-40">
            {/*-------------- video thumbnail ------------- */}
            {!isLoading ? (
              <img
                src={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
                alt={snippet?.title}
                className="w-full h-full object-cover rounded-md"
              />
            ) : (
              <p className="loading_img w-full h-full bg-neutral-800 rounded-md"></p>
            )}
          </header>
          <div className="video-card-content p-1 grid grid-cols-[50px,1fr]  mt-2">
            {/* --------------- channel profile --------------- */}
            <Link
              to={
                snippet?.channelId &&
                `/channel/${snippet?.channelId || demoChannelUrl}`
              }
            >
              {/* --------- video profile img----------- */}
              <img
                src={snippet?.thumbnails?.high?.url || demoProfilePicture}
                className="size-11 hover:bg-neutral-400 object-cover rounded-full p-[.1rem] 
                 "
                alt=""
              />
            </Link>
            <div className="content overflow-x-auto">
              {/*----------- video title --------------- */}
              <Link to={videoId && `/video/${videoId || demoVideoUrl}`}>
                <h2 className="video-card-title line-clamp-2 leading-[1.2rem] mb-1 font-semibold ">
                  {snippet?.title || demoVideoTitle}
                </h2>
              </Link>

              {/*----------- channel title --------------- */}
              <Link
                to={
                  snippet?.channelId &&
                  `/channel/${snippet?.channelId || demoChannelUrl}`
                }
              >
                <h5 className="video-card-title  text-neutral-600 line-clamp-1 leading-[1rem] text-[.789rem]  font-bold hover:text-neutral-800 w-fit">
                  {snippet?.channelTitle || demoChannelTitle}
                </h5>
              </Link>
            </div>
          </div>
        </article>
      </Link>
    </>
  );
};

export default VideoCard;
