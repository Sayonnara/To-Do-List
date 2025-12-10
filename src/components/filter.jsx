const Filter = ({filter, setFilter, setSort}) => {
  return (
    <div className="filter">
      <h2>Filtrar:</h2>

      <div className="filter-options">
        {/* cada "row" empilha label em cima do controle */}
        <div className="filter-row">
          <label htmlFor="status-select">Status:</label>
          <select value={filter} onChange={(e) => setFilter(e.target.value)} className="filter-select">
            <option value="All">Todas</option>
            <option value="Completed">Completo</option>
            <option value="Incompleted">Incompleto</option>
          </select>
        </div>

        <div className="filter-row">
          <label>Ordem Alfabética</label>
          <div className="order-buttons">
            <button type="button" className="btn" onClick={()=> setSort('Asc')}>Asc</button>
            <button type="button" className="btn" onClick={()=> setSort('Desc')}>Desc</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
