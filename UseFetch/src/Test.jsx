import UseFetch from "./UseFetch";

const UseFetchHookTest = () => {

    const {data, error, loading} = UseFetch(
        `https://dummyjson.com/products?limit=20&skip=0`,
    {});
    const products = data.products
    return(
        <>
            <h2>UseFetch Hook</h2>
            {
                error ? <h3>{error}</h3> : 
                    products && products.length > 0 && !loading?
                        products.map((product) => (
                        <div key={product.id}>
                            <p>{product.title}</p>
                        </div>
                    ))
                : null
            }
        </>
    );
}

export default UseFetchHookTest