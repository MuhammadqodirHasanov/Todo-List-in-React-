import React from "react"
import stylesTodo from './App.module.css'

function App(){
    const [todo, setTodo] = React.useState([])
    const [value, setValue] = React.useState('')

    const submit = (e) => {
        e.preventDefault()
        setTodo([...todo,{name:value,id:Math.round(Math.random() * 1000)}])
        setValue('')
    }
    const deleteTodo = (id) => {
        setTodo((item)=> {
            return item.filter((el)=> el.id != id)
        })
    }
    const editTodo = (id, name) => {
        const NewName = prompt('Nom kiriting',name)
        setTodo((item)=>{
            return item.map((el)=> {
                if(el.id == id){
                    el.name = NewName
                }
                return el
            })
        })
    }
    return (
        <div className={stylesTodo.center}>
            <form onSubmit={submit}>
                <input 
                    className={stylesTodo.inp}
                    type="text" 
                    value={value}
                    onChange={(e)=>setValue(e.target.value)}
                />
                <button className={stylesTodo.btn} type="submit">Add</button>
            </form>
            <ul>
                {todo?.map((item)=>(
                    <li className={stylesTodo.item} key={item.id}>
                        <p className={stylesTodo.txt}>{item.name}</p>
                        <div>
                            <button className={stylesTodo.btn} onClick={ () => deleteTodo(item.id) }>Delete</button>
                            <button className={stylesTodo.btn} onClick={ () => editTodo(item.id, item.name) }>Edit</button>
                        </div>
                    </li>))}
            </ul>
        </div>
    )
}

export { App }