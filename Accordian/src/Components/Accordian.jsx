import { useState } from "react";
import data from "../data.js";

function Accordian() {

  const [view, setView] = useState(null)
  const [enableMulti, setEnableMulti] = useState(false)
  const [multi, setMulti] = useState([])

  const viewAccord = (id) => {
    setView(id === view ? null : id)
  }

  const multiAccord = (id) => {
    let cpyMulti = [...multi];
    const indexOfCurrentId = cpyMulti.indexOf(id);
    indexOfCurrentId === -1 ?
      cpyMulti.push(id) :
      cpyMulti.splice(indexOfCurrentId, 1)

    setMulti(cpyMulti)
  }

  return (
    <>
      <div onClick={() => setEnableMulti((prev) => !prev)}>
        <h3>
          Enable Multiple Selection
        </h3>
      </div>
      <div className="" id="Accordian">
        {
          data && data.length > 0 ?
            data.map((accord) => (
              <div id="title" onClick={
                enableMulti ?
                  () => multiAccord(accord.id) :
                  () => viewAccord(accord.id)
              }>
                <h3>
                  {accord.question}
                </h3>
                <span> + </span>
                {
                  <div>
                    {view === accord.id || multi.indexOf(accord.id) !== -1 ?
                      (<div>
                        {accord.answer}
                      </div>)
                      : null
                    }
                  </div>
                }
              </div>
            )) :
            <div>
              Data Not Found
            </div>
        }
      </div>
    </>
  );
}

export default Accordian;