import useSWR from 'swr'
import { useState } from 'react'

async function jsonFetcher(path) {
    const res = await fetch(path)
    return res.json()
}

const getId = () => Math.ceil((Math.random() * 99999999) + 100)

export default function Todos() {
    const [todoName, setTodoName] = useState(null)
    const { data, mutate } = useSWR('/api/todos', jsonFetcher)
    if (!data) {
        return 'loading...'
    }

    const addTodo = async (e) => {
        e.preventDefault()

        mutate([...data, {name: todoName, id: getId() , clientOnly: true}], false)
        setTodoName('')

        const addRes = await fetch('/api/todo', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name: todoName})
        })

        if (!addRes.ok) {
            throw new Error(`Adding todo failed: ${await addRes.text()}`)
        }

        mutate()
    }

    return (
        <div className="container">
            <div className="todos">
                {data.map(todo => (
                    <div
                        key={todo.id}
                        className={todo.clientOnly? 'todo client-only' : 'todo'}
                    >
                        {todo.name}
                    </div>
                ))}
            </div>
            <form className="add-todo" onSubmit={addTodo}>
                <input
                    type="text"
                    placeholder="Enter todo name"
                    value={todoName}
                    onChange={e => setTodoName(e.target.value)}
                />
                <button>Add</button>
            </form>
        </div>
    )
}