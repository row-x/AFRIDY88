const GameVendorButton = ({ gameVendorImg, gameVendorText, isFirst }) => {
  return (
    <div>
      <button className="w-full mx-auto md:p-2 text-xs lg:text-sm font-semibold md:hover:bg-[#FFCD03] cursor-pointer md:border-2 md:border-[#FFCD03] md:rounded-full transition-all duration-500">
        <div className="flex gap-1 flex-col md:flex-row justify-center items-center">
          {gameVendorImg && (
            <div className="size-11 md:size-5 p-2 md:p-0 rounded-lg md:rounded-none bg-slate-300 md:bg-inherit">
              <img className="w-full" src={gameVendorImg} alt="" />
            </div>
          )}
          <p
            className={`${
              isFirst &&
              "border-2 md:border-none rounded-lg md:rounded-lg border-gray-300 md:border-gray-500 p-3 md:p-0"
            }`}
          >
            {gameVendorText}
          </p>
        </div>
      </button>
    </div>
  );
};

export default GameVendorButton;
