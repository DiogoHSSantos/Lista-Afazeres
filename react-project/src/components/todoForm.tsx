import { useState } from "react";

const TodoForm = ({addTodo}:any) => {
    const[value, setValue] = useState('')
    const[category, setCategory] = useState('')

    const handleSubmit = (e:any)=>{
        e.preventDefault()
        if(!value || !category){return;}
        addTodo(value, category)
        setValue('');
        setCategory('');

    }
    return(
        <div className="todoForm">
            <h2>Criar tarefa</h2>
            <form onSubmit={handleSubmit} >
                <input type="text" placeholder="Digite aqui a sua tarefa" onChange={(e)=>setValue(e.target.value)} value={value}/>
                <select onChange={(e)=>setCategory(e.target.value)} value={category}>
                    <option value='all'>Escolha o grupo:</option>
                    <option value="trabalho">Trabalho</option>
                    <option value="pessoal" >Pessoal</option>
                    <option value="estudos">Estudos</option>
                </select>
                <button type="submit" className="criarTarefa">Criar</button>
            </form>

        </div>
    );
};

export default TodoForm;
