import { useState } from 'react'
import TodoList from './TodoList'

const data = [
    {id: Math.random(), name: "Learn Next.js"},
    {id: Math.random(), name: "Learn SWR"}
]

export default function Todos() {
    const [listKey, setListKey] = useState(Math.random())
    
    if (!data) {
        return 'loading...'
    }

    const addTodo = async (todoName) => {
        data.push({
            id: Math.random(),
            name: todoName
        })

        setListKey(Math.random())
    }

    return (
        <TodoList key={listKey} data={data} onNewTodo={addTodo}/>
    )
}