import { useState } from 'react';


export default function TodoApp(){

    const [todo, setTodo] = useState('');
    const [todoList, setTodoList] = useState([]);
        
    const onChange = (e) =>{
        setTodo(e.target.value);
    }

    const onSubmit = e => {
        e.preventDefault();
        if(todo ===''){return}
        setTodoList(preVal => [todo, ...preVal]);
        setTodo('');
    }

    return (
        <div>
            <h1>My Todo List</h1>
            <form onSubmit={onSubmit}>
            <input 
                type="text"
                placeholder='Write your to do...'
                value={ todo }
                onChange={ onChange } />
            <button >Add to do</button>
            </form>
            <ul>
                { todoList.map((item, idx) => (<li key={idx}>{item}</li>)) } {/* li를 createElement하지 않고 넣을 수 있는 이유는 jsx라서 가능(바벨기능) */}
            </ul>
            
        </div>
    );
}
