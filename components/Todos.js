import { useState } from 'react'
import useSWR, {mutate} from 'swr'
import TodoList from './TodoList'

async function jsonFetcher(path) {
    const res = await fetch(path)
    return res.json()
}

export default function Todos() {
    const {data} = useSWR('/api/todos', jsonFetcher)
    const [listKey, setListKey] = useState(Math.random())
    
    if (!data) {
        return 'loading...'
    }

    const addTodo = async (todoName) => {
        const addRes = await fetch('/api/todo', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({name: todoName})
        })
    
        if (!addRes.ok) {
            const {error} = await addRes.json()
            throw new Error(error.message);
        }
    
        await mutate('/api/todos')
    
        setListKey(Math.random())
    }

    return (
        <TodoList key={listKey} data={data} onNewTodo={addTodo}/>
    )
}