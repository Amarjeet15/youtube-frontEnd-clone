import { AiOutlineBulb, AiOutlineLike } from "react-icons/ai";
import { BiBell, BiSolidHot, BiVideoPlus } from "react-icons/bi";
import { BsHandbag, BsPlayBtn, BsTrophy } from "react-icons/bs";
import { GiHanger } from "react-icons/gi";
import { GoHistory, GoHome } from "react-icons/go";
import { GrGamepad } from "react-icons/gr";
import { ImNewspaper } from "react-icons/im";
import { IoMdCut } from "react-icons/io";
import { IoMusicalNoteOutline, IoSettingsSharp } from "react-icons/io5";
import { LuArrowDownToLine } from "react-icons/lu";
import {
  MdOutlineSubscriptions,
  MdOutlineWatchLater,
  MdSwitchAccount,
} from "react-icons/md";
import {
  PiBroadcastFill,
  PiFilmSlateLight,
  PiShareFatLight,
} from "react-icons/pi";
import { RiPlayListLine } from "react-icons/ri";
import { SiPodcastindex, SiYoutubeshorts } from "react-icons/si";

//mini side bar link icons

export const logo =
  "https://www.gstatic.com/youtube/img/branding/youtubelogo/svg/youtubelogo.svg";

export const navButtons = [
  {
    icon: BiVideoPlus,
    name: "Create",
  },
  {
    icon: BiBell,
    name: "Notification",
  },
  {
    icon: IoSettingsSharp,
    name: "Settings",
  },
];

export const feedCategories = [
  { name: "New" },
  { name: "Podcasts" },
  { name: "Action" },
  { name: "ReactJS" },
  { name: "NextJS" },
  { name: "Music" },
  { name: "Education" },
  { name: "Podcast" },
  { name: "Movie" },
  { name: "Gaming" },
  { name: "Javascript" },
  { name: "Android" },
  { name: "Trailers" },
  { name: "Debates" },
  { name: "News" },
  { name: "Gym" },
  { name: "Crypto" },
];

export const largeSideBarLink = [
  {
    icon: GoHome,
    name: "Home",
    to: "/",
  },
  {
    icon: SiYoutubeshorts,
    name: "Shorts",
  },
  {
    icon: MdOutlineSubscriptions,
    name: "Subscriptions",
  },
  {
    icon: MdSwitchAccount,
    name: "You Channel",
  },
  {
    icon: GoHistory,
    name: "History",
  },
  {
    icon: RiPlayListLine,
    name: "Playlist",
  },
  {
    icon: BsPlayBtn,
    name: "Your videos ",
  },
  {
    icon: MdOutlineWatchLater,
    name: "Watch later ",
  },
  {
    icon: AiOutlineLike,
    name: "Liked videos ",
  },
  {
    icon: IoMdCut,
    name: "Your clips ",
  },

  {
    icon: BiSolidHot,
    name: "Trending",
    link: "Trending",
  },
  {
    icon: BsHandbag,
    name: "Shopping",
    link: "Shopping",
  },
  {
    icon: IoMusicalNoteOutline,
    name: "Music",
    link: "Music",
  },
  {
    icon: PiFilmSlateLight,
    name: "Movies",
    link: "Movies",
  },
  {
    icon: PiBroadcastFill,
    name: "Live",
    link: "Live",
  },
  {
    icon: GrGamepad,
    name: "Gaming",
    link: "Gaming",
  },
  {
    icon: ImNewspaper,
    name: "News",
    link: "News",
  },
  {
    icon: BsTrophy,
    name: "Sports",
    link: "Sports",
  },
  {
    icon: AiOutlineBulb,
    name: "Courses",
    link: "Courses",
  },
  {
    icon: GiHanger,
    name: "Fashion & Beauty",
    link: "Fashion & Beauty",
  },
  {
    icon: SiPodcastindex,
    name: "Podcasts",
    link: "Podcasts",
  },
];

export const smallSideBarLink = [
  {
    icon: GoHome,
    name: "Home",
    to: "/",
  },
  {
    icon: SiYoutubeshorts,
    name: "Short",
  },
  {
    icon: MdOutlineSubscriptions,
    name: "Subscriptions",
  },
  {
    icon: RiPlayListLine,
    name: "You",
  },
];

export const videoDetailsIcon = [
  {
    name: "Share",
    icon: PiShareFatLight,
  },
  {
    name: "Remix",
    icon: SiYoutubeshorts,
  },
  {
    name: "Download",
    icon: LuArrowDownToLine,
  },
];

export const demoThumbnailUrl = "https://i.ibb.co/G2L2Gwp/API-Course.png";
export const demoChannelUrl = "/channel/UCmXmlB4-HJytD7wek0Uo97A";
export const demoVideoUrl = "/video/GDa8kZLNhJ4";
export const demoChannelTitle = "JavaScript Mastery";
export const demoVideoTitle =
  "Build and Deploy 5 JavaScript & React API Projects in 10 Hours - Full Course | RapidAPI";
export const demoProfilePicture =
  "http://dergipark.org.tr/assets/app/images/buddy_sample.png";
