

const Filter = ()=>{
    return(
        <div className="filter">
            <div className="filterOptions">
                <div>
                    <p>Status: </p>
                    <select>
                        <option value="All">Todas</option>
                        <option value="completed">Completas</option>
                        <option value="incomplete">Incompletas</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default Filter;