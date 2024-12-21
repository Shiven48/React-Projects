import { useEffect, useState } from "react";

function Load_Data() {
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);
    const [count, setCount] = useState(0);
    const [disabled, setDisabled] = useState(false);

    useEffect(() => {
        fetchData();
    }, [count]);

    useEffect(() => {
        setDisabled(products.length >= 100);
    }, [products]);

    const fetchData = async () => {
        try {
            setLoading(true);
            const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${ count === 0 ? 0 : count * 20}`);
            const data = await response.json();
            
            if (data && data.products && data.products.length) {
                setProducts((prevData) => [...prevData, ...data.products]);
                console.log('Fetched products:', data.products.length);
                console.log('Total products:', products.length + data.products.length);
            }
        } catch (e) {
            console.log(e);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div id="container" className="flex flex-col gap-5">
            {loading && (
                <div className="text-center py-4">Please Wait data is Loading!!</div>
            )}
            
            <div id="products-container" className="grid grid-cols-4 gap-2.5">
                {products && products.length > 0 && products.map((item) => (
                    <div 
                        className="p-5 border border-solid border-gray-900 flex flex-col gap-2.5" 
                        key={item.id}
                    >
                        <img 
                            className="w-48 h-48 object-cover"
                            src={item.thumbnail}
                            alt={item.title}
                        />
                        <p className="text-center">{item.title}</p>
                    </div>
                ))}
            </div>

            <div className="flex flex-col items-center gap-2">
                <button 
                    onClick={() => setCount(count + 1)}
                    disabled={disabled}
                    className="px-4 py-2 bg-blue-500 text-white rounded-md disabled:bg-gray-300 disabled:cursor-not-allowed"
                >
                    Load More
                </button>
                {disabled && (
                    <p className="text-red-500">Maximum limit of 100 products reached!</p>
                )}
            </div>
        </div>
    );
}

export default Load_Data;