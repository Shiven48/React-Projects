import { useEffect, useState } from "react"
import {
  TextField,
  Button,
  Divider
} from "@mui/material"
import CustomCard from "../Components/CustomCard"

function App() {

  const [input, setInput] = useState('')
  const [userData, setUserData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [activateCustomCard, setActivateCustomCard] = useState(false)

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
    handleFetch();
    setActivateCustomCard(true)
  }

  if (loading) {
    <div> Loading profile! Please Wait... </div>
  }

  return (
    <div id="search-input-container" className="justify-items-center mt-20"> 
      <TextField 
      className="bg-white rounded-md"
        id="filled-hidden-label-small"
        size="small"
        placeholder="Enter Username"
        name="text-input"
        label="Filled" 
        variant="filled"
        value={input}
        type="text"
        required
        onChange={(e) => setInput(e.target.value)}
      /> 
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <Button
        style={{backgroundColor:"#39e75f",
          marginBottom:"40px",
          color:"black"
        }}
        onClick={getData}
      > Search </Button>
      <div id="data">
        {
          activateCustomCard ? 
          <CustomCard profile={userData}/> :
          null
        }
      </div>
    </div>
  )
}

export default App
