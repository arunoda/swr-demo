import { useState } from 'react'

const data = [
    {id: Math.random(), name: "Learn Next.js"},
    {id: Math.random(), name: "Learn SWR"}
]

export default function Todos() {
    const [todoName, setTodoName] = useState('')

    if (!data) {
        return 'loading...'
    }

    const addTodo = async (e) => {
        e.preventDefault()

        data.push({
            id: Math.random(),
            name: todoName
        })

        setTodoName('')
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