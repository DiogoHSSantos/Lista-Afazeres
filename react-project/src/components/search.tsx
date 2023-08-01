

const Search = ({search, setSearch}:any)=>{
    return(
        <div className="search">
            <h2>Filtrar lista:</h2>
            <input type="text" value={search} onChange={(e)=>{setSearch(e.target.value)}} placeholder="Digite para pesquisar" className="inputPesquisar"/>


        </div>
    );
};

export default Search