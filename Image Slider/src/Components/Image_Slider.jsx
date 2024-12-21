import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

function ImageSlider({ url, pages = 1, limit = 5 }) {
    const [sliderIndex, setSliderIndex] = useState(0);
    const [loading, setLoading] = useState(false);
    const [images, setImages] = useState([]);
    const [errorMsg, setErrorMsg] = useState(null);

    useEffect(() => {
        if (url !== "") fetchImages(url);
    }, [url]);

    const fetchImages = async (url) => {
        try {
            setLoading(true);
            const response = await fetch(`${url}?page=${pages}&limit=${limit}`);
            const data = await response.json();

            if (data) {
                setImages(data);
                setLoading(false);
            }
        } catch (e) {
            setErrorMsg(e.message);
            setLoading(false);
        }
    };

    const handleLeft = () => {
        setSliderIndex(sliderIndex === 0 ? images.length - 1 : sliderIndex - 1);
    };

    const handleRight = () => {
        setSliderIndex(sliderIndex === images.length - 1 ? 0 : sliderIndex + 1);
    };

    if (loading) {
        return <div>Loading data! Please Wait.</div>;
    }

    if (errorMsg !== null) {
        return <div>Error Occurred! {errorMsg}</div>;
    }

    return (
        <div className="flex items-center justify-center w-[600px] h-[450px] relative overflow-hidden">
            <BsArrowLeftCircleFill
                id="arrow arrow-left"
                className="absolute w-[2rem] h-[2rem] text-white drop-shadow-[0px_0px_5px_#555] left-[1rem] top-[50%] transform -translate-y-1/2 cursor-pointer"
                onClick={handleLeft}
            />
            {images && images.length > 0 ? (
                images.map((imageItem, index) => (
                    <img
                        id="current-image"
                        key={imageItem.id}
                        alt={imageItem.download_url}
                        src={imageItem.download_url}
                        className={`${
                            sliderIndex === index ? "block" : "hidden"
                        } rounded-[0.5rem] shadow-[0px_0px_10px_#666] w-full h-full object-cover transition-opacity duration-500`}
                    />
                ))
            ) : null}
            <BsArrowRightCircleFill
                id="arrow arrow-right"
                className="absolute w-[2rem] h-[2rem] text-white drop-shadow-[0px_0px_5px_#555] right-[1rem] top-[50%] transform -translate-y-1/2 cursor-pointer"
                onClick={handleRight}
            />
            <span className="absolute bottom-[1rem] left-[50%] transform -translate-x-1/2 flex space-x-2">
                {images &&
                    images.length > 0 &&
                    images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setSliderIndex(index)}
                            className={`${
                                sliderIndex === index
                                    ? "bg-blue-500"
                                    : "bg-white"
                            } h-[10px] w-[10px] rounded-full border-none cursor-pointer`}
                        ></button>
                    ))}
            </span>
        </div>
    );
}

export default ImageSlider;
