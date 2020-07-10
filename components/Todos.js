import { useState } from 'react'
import useSWR from 'swr'
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
        throw new Error('Not implemeted yet!')
    }

    return (
        <TodoList key={listKey} data={data} onNewTodo={addTodo}/>
    )
}