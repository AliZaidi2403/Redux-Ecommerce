import { dotSlide, nextSlide, prevSlide } from "./../features/SliderSlice";
import { useSelector, useDispatch } from "react-redux";
import { sliderData } from "../assets/data/dummyData";
function Slider() {
  const slideIndex = useSelector((state) => state.slider.value);
  const dispatch = useDispatch();
  return (
    <div className="relative pb-4">
      <div>
        {sliderData.map((slide) => {
          return (
            <div
              key={slide.id}
              className={
                parseInt(slide.id) === slideIndex
                  ? "opacity-100 duration-500 ease-in-out scale-100"
                  : "opacity-0 duration-500 ease-in-out scale-95"
              }
            >
              {parseInt(slide.id) === slideIndex && (
                <>
                  <div>
                    <img
                      className="h-[650px] w-full"
                      src={slide.img}
                      alt="slide-image"
                    />
                  </div>
                  <div className="absolute bottom-[75%] opacity-70 mx-auto inset-x-1/4">
                    <p className="text-white text-4xl font-inter font-bold ">
                      {slide.text}
                    </p>
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>
      <div className=" flex absolute bottom-24 left-[45%]">
        {sliderData.map((dot, index) => {
          return (
            <div className="mr-4" key={index}>
              <div
                className={
                  index === slideIndex
                    ? "bg-slate-200 p-2 rounded-full cursor-pointer"
                    : "bg-gray-400 p-2 rounded-full cursor-pointer"
                }
                onClick={() => {
                  dispatch(dotSlide(index));
                }}
              ></div>
            </div>
          );
        })}
      </div>
      <button
        className="absolute bottom-[50%] right-4 bg-white rounded-full p-2 hover:bg-slate-400"
        onClick={() => dispatch(nextSlide(slideIndex + 1))}
      >
        {" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
      <button
        className="absolute bottom-[50%] left-4 bg-white rounded-full p-2 hover:bg-slate-400"
        onClick={() => dispatch(prevSlide(slideIndex - 1))}
      >
        {" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </button>
    </div>
  );
}

export default Slider;
