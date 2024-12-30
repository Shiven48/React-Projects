import { useEffect, useState } from "react"
import {
  Input,
  Button
} from "@mui/material"

function App() {

  const [input, setInput] = useState('')
  const [userData, setUserData] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    handleFetch()
  }, [])

  const handleFetch = async () => {
    try {
      const response = await fetch(`https://api.github.com/users/${input}`)
      const data = await response.json()
      setLoading(true)

      if (data) {
        setUserData(data)
        setLoading(false)
      }
    } catch (e) {
      console.log(`Failed to fetch data`,e)
      setLoading(false)
    }
  }

  const getData = () => {
    handleFetch()
  }

  if (loading) {
    <div> Loading profile! Please Wait... </div>
  }

  console.log(userData)

  return (
    <div id="container">
      <div id="search-input-container">
        <Input
          name="text-input"
          value={input}
          type="text"
          required
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      <div id="search-button-container">
        <Button
          onClick={getData}
        > Search </Button>
      </div>
      <div id="profile-data-display">
        {/* {For displaying data in this div using card} */}
      </div>
    </div>
  )
}

export default App
