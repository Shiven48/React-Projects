import FeatureFlagGlobalContext from "./Components"
import FeatureFlag from "./Components/Context"


function App() {

  return (
    <>
      <FeatureFlagGlobalContext>
        <FeatureFlag />
      </FeatureFlagGlobalContext>
    </>
  )
}

export default App
