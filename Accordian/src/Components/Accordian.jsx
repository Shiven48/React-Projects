import data from "../data.js";

function Accordian(){
    return(
    <div className='parentContainer'>
      <div className='Accordian'>
        {data && data.length > 0 ? ( 
        data.map((singleData) => ( 
            <div className="single_data">
                <div className="question">
                    <h3>Question : {singleData.question}</h3>
                    <span > + </span>
                </div> 
            </div>
        ))
        ) : (
        <div>No data Found</div>
        )}
      </div>
    </div>
    );
}

export default Accordian;