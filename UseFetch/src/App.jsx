import UseFetch from "./UseFetch"


function App() {
  return (
    <>
      <UseFetch url={`https://dummyjson.com/products?limit=20&skip=0`}/>
    </>
  )
}

export default App
