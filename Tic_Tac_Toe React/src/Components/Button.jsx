function Button({value, onclick}) {
    return(
      <div>
            <button onClick={onclick} className="border border-red-400 text-center w-24 h-24 text-4xl float-left">{value}</button>
      </div>
    )
  }
  
export default Button
  