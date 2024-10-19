const Error = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center select-none">
      <img
        src="public\men-finding-network.png"
        alt="\men-finding-network"
        className="h-56 object-cover"
      />
      <div className="flex flex-col items-center gap-2  *:text-lg *:font-semibold  ">
        <span>Network Error</span>
        <span>You're offline. Check your connection.</span>
      </div>
    </div>
  );
};

export default Error;
