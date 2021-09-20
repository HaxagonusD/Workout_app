import "./SetRow.css"
function SetRow({setNumber}) {
    return (<div className="SetRow">
                <div>{setNumber}</div>
                <input type="number" className="SetRowInputReps"></input>
                <input type="number" className="SetRowCheck"></input>
            </div>
    )
}

export default SetRow;