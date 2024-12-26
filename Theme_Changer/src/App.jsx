import UseLocalAccess from "./UseLocalAccess"
import './theme.css'

function App() {

  const [theme, setTheme] = UseLocalAccess("theme", "dark")

  const toggleTheme = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  }

  return (
    <div className="light-dark-mode" data-theme={theme}>
      <div className="container">
        <p> Hello </p>
        <button onClick={toggleTheme}>
          Change Theme 
        </button>
      </div>
    </div>
  )
}

export default App
