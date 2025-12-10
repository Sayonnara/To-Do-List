import {useState} from "react";

const ToForm = ({addTodo}) => {  
    const [value, setValue] = useState("");
    const [category, setCategory] = useState("");  
    
    const handleSubmit = (e) => {
        
        e.preventDefault();
       if(!value  || !category ){ 
        alert("Por favor, preencha todos os campos!");
        return;

       }
        addTodo(value, category);
        setValue("");
        setCategory("");    
       }

    return <div className="toform">

        <h1>Criar Tarefa</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Nova Tarefa" onChange={(e) => setValue(e.target.value)}/>
            <select  onChange={(e) => setCategory(e.target.value)}>
                <option value=" ">SELECIONE A CATEGORIA</option>  
                <option value="Trabalho">Trabalho</option>  
                <option value="Estudos">Estudos</option>
                <option value="Pessoal">Pessoal</option>
            </select>
            <button className="btn-adicionar" type="submit">Adicionar</button>
        </form>
    </div>

}

export default ToForm;