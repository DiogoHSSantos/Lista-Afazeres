

const Todo = ({ i, remTd, compTd}:any)=>{
    return(
        <div className="todo" key={i.id} >
            <div className="container"  >
                <p style={{textDecoration: i.isCompleted ? 'line-through': ''}}>{i.text}</p>
                <p>({i.category})</p>
            </div>
            <div className="btnArea">
                <button className="complete" onClick={()=>{compTd(i.id);}}>Completar</button>
                <button className="remove" onClick={()=>{remTd(i.id)}}><i className='bx bxs-trash-alt'></i></button>
            </div>
        </div>
    )
}

export default Todo