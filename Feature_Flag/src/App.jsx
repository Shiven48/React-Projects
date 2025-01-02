import FeatureFlag from "./Components/index.jsx"
import FeatureFlagGlobalContext from "./Components/Context/index.jsx"


function App() {

  return (
    <>
      <FeatureFlagGlobalContext>
        <FeatureFlag/>
      </FeatureFlagGlobalContext>
    </>
  )
}

export default App
