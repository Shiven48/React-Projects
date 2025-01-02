import { useState } from "react"
import QRCode from "react-qr-code"

function QR() {
  const [input, setInput] = useState('')
  const [qr, setQr] = useState('')

  const generateQR = () => {
    if(input?.length) setQr(input)
      setInput('')
  }

  return (
    <>
    <div className="justify-items-center items-center bg-[rgba(10,59,99,0.95)] min-h-screen py-5">
      <h1 className="text-blue-100">QR CODE GENERATOR</h1>
      <input 
        className="border-2 rounded-md border-solid border-black mx-4 text-center h-7"
        type="text"
        placeholder="Enter the text"
        onChange={(e) => {setInput(e.target.value)}}
        value={input}
      />
      <button onClick={generateQR} className="my-10 border border-black text-white bg-[#7F5112] rounded-md w-20"> Generate </button>
      <QRCode value={qr} size={400} className="shadow-lg shadow-white border-2 border-s-black cursor-pointer"/>
    </div>
    </>
  )
}

export default QR
