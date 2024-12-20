import { useEffect } from "react";
import { useState } from "react";

function ImageSlider({url,pages = 1,limit = 5}){
    
    const [sliderIndex,setSliderIndex] = useState(0)
    const [loading,setLoading] = useState(false)
    const [images,setImages] = useState([])
    const [errorMsg,setErrorMsg] = useState(null)

    useEffect(() => {
        if(url !== "") fetchImages(url)
    },[url])

    const fetchImages = async (url) => {
        try{
            setLoading(true)
            const response = await fetch(`${url}?page=${pages}&limit=${limit}`);
            const data = await response.json();

            if(data){
                setImages(data)
                setLoading(false)
            }
        }catch(e){
            setErrorMsg(e.message)
            setLoading(false)
        }
    }

    console.log(images);
    
    if(loading){
        return <div>Loading data! Please Wait.</div>
    }

    if(errorMsg !== null){
        return <div>Error Occured! {errorMsg}</div>
    }

    return(
        <>
        </>
    )
}

export default ImageSlider;