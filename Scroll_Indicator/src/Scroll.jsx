import { useEffect, useState } from "react"

const Scroll = ({ url = ""}) => {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [percentage,setPercentage] = useState(0)

    useEffect(() => {
        fetchData();
    },[url])

    useEffect(() => {
        window.addEventListener('scroll',handleScroll)

        return () => (
            window.removeEventListener('scroll', () => {})
        )
    },[url])


    const handleScroll = () => {
        console.log(
            document.body.scrollTop,
            document.documentElement.scrollTop,
            document.documentElement.scrollHeight,
            document.documentElement.clientHeight
        );

        const ScrolledArea = document.body.scrollTop || document.documentElement.scrollTop
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
        setPercentage((ScrolledArea/height)*100)
    }

    const fetchData = async () => {
        try{
            setLoading(true)
            const temp = await fetch(url);
            const temp_data = await temp.json();

            if(temp_data?.products?.length){
                setData(temp_data);
                setLoading(false)
            }
        } catch (e) {
            setError(e)
            setLoading(false)
        }
    }

    if(loading){
        <div>Loading Data! Please wait...</div>
    }

    if(error){
        <div>Something went wrong {error}</div>
    }

    console.log(percentage)

    return (
        <>
        <div id="header-container" className="fixed top-0 z-1 w-full text-center bg-purple-700">
        <h2 className=" text-xl text-center mt-1 text-white"> Scroller </h2>
        <div className="w-full h-4  bottom-full p-0 m-0">
            <div className="h-2.5 w-0 bg-purple-300" style={{width:`${percentage}%`}}></div>
        </div>
        </div>
        <div id="data-container" className="items-center justify-items-center mt-14">
        {
            (data?.products?.length) ? 
            data.products.map((product) => (
                <p className="mb-4">{product.title}</p>
            ))
            : null
        }
        </div>
        </>
    );
}

export default Scroll;