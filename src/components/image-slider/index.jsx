import { useEffect, useState } from 'react';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs';
import { CiMenuBurger } from 'react-icons/ci';

export default function ImageSlider({ url, limit = 5, page = 1 }) {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchImages(getUrl) {
    try {
      setLoading(true);
      const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
      const data = await response.json();

      if (data) {
        setImages(data);
        setLoading(false);
      }
    } catch (error) {
      setErrorMsg(error.message);
      setLoading(false);
    }
  }

  const handlePrevious = () => {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  };
  const handleNext = () => {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  };

  useEffect(() => {
    if (url !== '') fetchImages(url);
  }, [url]);
  console.log(images);
  if (loading) return <div>Loading Data ! Please wait</div>;
  if (errorMsg) return <div>ErrorOccurred : {errorMsg}</div>;

  return (
    // contianer
    <div className="relative flex justify-center items-center w-[600px] h-[450px]">
      {/* arrow arrow left -> className */}
      <BsArrowLeftCircleFill
        className="absolute w-8 h-8 text-white drop-shadow-[0_0_5px_#555] left-4"
        onClick={handlePrevious}
      />
      {images && images.length
        ? images.map((imageItem, index) => (
            // currentImage -> className
            <img
              key={imageItem.id}
              alt={imageItem.download_url}
              src={imageItem.download_url}
              className={
                currentSlide === index
                  ? 'shadow-[0_0_7px_#666] w-full h-full rounded-lg'
                  : 'shadow-[0_0_7px_#666] w-full h-full rounded-lg hidden' /* hide-current */
              }
            />
          ))
        : null}
      {/* arrow arrow right -> className */}
      <BsArrowRightCircleFill
        className="absolute w-8 h-8 text-white drop-shadow-[0_0_5px_#555] right-4"
        onClick={handleNext}
      />
      {/* className -> circleIndicator */}
      <span className="flex absolute bottom-4">
        {images && images.length
          ? images.map((_, index) => (
              <button
                key={index}
                // currentIndicator --> className
                className={
                  currentSlide === index
                    ? 'bg-white h-4 w-4 rounded-[50%] border-none outline-none mx-[0.2rem] my-0 cursor-pointer'
                    : 'bg-gray-500 h-4 w-4 rounded-[50%] border-none outline-none mx-[0.2rem] my-0 cursor-pointer' /* Inactive */
                }
                onClick={() => setCurrentSlide(index)}
              ></button>
            ))
          : null}
      </span>
    </div>
  );
}
