import { useYoutube } from "../context/ContextAPI";

const NavButton = ({ link, size }) => {
  const { toolTip, setToolTip } = useYoutube();

  return (
    <>
      <button
        onMouseEnter={() => setToolTip(link.name)}
        onMouseLeave={() => setToolTip(null)}
        className={`relative hover:bg-neutral-800 active:bg-neutral-700 hover:text-neutral-200 p-1.5 rounded-full transition-all duration-200 ease-in-out flex justify-center items-center `}
      >
        <link.icon size={size} />
        {toolTip === link.name && (
          <span
            className={`absolute
            px-3 py-1 bg-neutral-600 text-neutral-50 text-[.75rem] rounded-[.2rem] font-semibold top-full mt-2  `}
          >
            {link.name}
          </span>
        )}
      </button>
    </>
  );
};

export default NavButton;
