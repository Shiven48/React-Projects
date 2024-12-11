import {useCallback, useEffect, useState, useRef} from "react"

function App() {

  let [length,setLength] = useState(8)
  let [charAllowed,setCharAllowed] = useState(false)
  let [numAllowed,setNumAllowed] = useState(false)
  let [password,setPassword] = useState("")

  const changePassword = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    const numbers = "0123456789"
    const chars = "`~!@#$%^&*(){}[]"

    if(numAllowed) str += numbers
    if(charAllowed) str += chars

    for(let i = 1;i <= length; i++) {
        let idx = Math.floor(Math.random() * str.length + 1)
        pass += str.charAt(idx);
    }

    setPassword(pass)
  },[length,charAllowed,numAllowed,setPassword])

  useEffect( () => {
    changePassword();
  },[length,numAllowed,charAllowed,changePassword])

  const passwordRef = useRef(null)

  const copytoClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,35);
    window.navigator.clipboard.writeText(password);
    alert("Copied to Clipboard");
  },[password])

  return (
<>
  <div className="px-3 py-2 bg-gray-700 rounded-lg w-full max-w-md mx-auto m-48">
    <div className="flex">
    <input
      type="text"
      value={password}
      className="w-full my-2 border-black border-2 h-10 rounded-md text-center readOnly"
      placeholder="Enter password"
      ref={passwordRef}
      />
      <button
        className="m-2 border p-1 rounded-xl border-black border-x-2 border-y-2 bg-orange-300"
        onClick={copytoClipboard}
      >
      Copy
      </button>
    </div>
    <div className="flex text-md gap-x-4">
      <div className="flex items-center gap-x-1">
      <input
          type="range"
          min={8}
          max={35}
          className="cursor-pointer"
          onChange={(e) => {setLength(e.target.value)}}
          value={length}
        />
        <label className="text-white">Length: {length}</label>
      </div>
      <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={numAllowed}
          id="numberInput"
          onChange={() => {
            setNumAllowed((prev) => !prev);
          }}
        />
        <label htmlFor="numberInput" className="text-white">Numbers {numAllowed}</label>
      </div>
      <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={charAllowed}
          id="characterInput"
          onChange={() => {
            setCharAllowed((prev) => !prev);
          }}
        />
        <label htmlFor="characterInput" className="text-white">Characters {charAllowed}</label>
      </div>
    </div>
  </div>
</>
  )
}

export default App

