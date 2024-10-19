const LoadingVideoCard = () => {
  return (
    <article className="video-card h-full  border-black   rounded-md  transition-all duration-100 ease-in-out">
      <header>
        <p className="loading_img w-full object-contain h-40 bg-neutral-800 rounded-md"></p>
      </header>
      <div className="video-card-content p-1 grid grid-cols-[48px,1fr] mt-2">
        <span className="size-9 bg-neutral-800 rounded-full"></span>
        <div className="content flex flex-col gap-1.5 ">
          <span className="video-card-title bg-neutral-800 w-full h-4 rounded-md mb-1"></span>
          <span className="video-card-title bg-neutral-800 w-full h-3 rounded-full"></span>
        </div>
      </div>
    </article>
  );
};

export default LoadingVideoCard;
