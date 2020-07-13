import { useState } from "react"
import classNames from 'classnames'

export default function TodoList({data, onNewTodo}) {
    const [newTodoName, setNewTodoName] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        onNewTodo(newTodoName)
    }

    return (
        <div className="container">
            <div className="todos">
                {data.map(todo => (
                    <div
                        key={todo.id}
                        className={classNames({
                            todo: true,
                            'client-only': todo.clientOnly,
                            'errored': todo.errorMessage
                        })}
                    >
                        {todo.errorMessage || todo.name}
                    </div>
                ))}
            </div>
            <form className="add-todo" onSubmit={handleSubmit}>
                <input
                    autoFocus
                    type="text"
                    placeholder="Enter todo name"
                    value={newTodoName}
                    onChange={e => setNewTodoName(e.target.value)}
                />
                <button>Add</button>
            </form>
        </div>
    )
}