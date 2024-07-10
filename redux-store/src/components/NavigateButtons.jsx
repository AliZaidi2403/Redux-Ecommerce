import clothes from "./../assets/images/clothes.jpg";
function NavigateButtons() {
  const buttons = [
    "Hoodies",
    "Dresses",
    "Suits",
    "Shoes",
    "T-Shirts",
    "Jeans",
    "Jackets",
    "Bags",
  ];
  return (
    <div>
      <div className="flex items-center justify-center py-8">
        {buttons.map((button, index) => {
          return (
            <div key={index} className="mr-4">
              <button className="font-inter text-gray-400 px-4 py-1 font-normal rounded-lg outline hover:bg-slate-400 hover:text-white duration-500 ease-in-out">
                {button}
              </button>
            </div>
          );
        })}
      </div>
      <div className="bg-black p-2 w-[55%] mx-auto rounded-md text-white">
        <h3 className="text-red-600 text-center text-lg font-inter font-bold tracking-normal leading-none">
          UPTO 50% OFF
        </h3>
      </div>
      <div className="flex justify-center item-center py-4">
        <img
          className="h-[60%] w-[70%] rounded-md shadow-md shadow-gray-600"
          src={clothes}
          alt="clothes pic"
        ></img>
      </div>
    </div>
  );
}

export default NavigateButtons;
