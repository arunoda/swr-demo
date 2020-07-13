import Todos from "../components/Todos";

export default function Index() {
    return (
        <div className="container">
            <h1>My Todo List</h1>
            <Todos />
            <style jsx global>{`
                body {
                    font-family: arial;
                    max-width: 300px;
                    margin: 50px auto;
                }
                .todo {
                    margin: 10px 0;
                    padding: 10px;
                    border: 1px solid #eee;
                    border-radius: 4px;
                    background-color: #fafafa;
                }
                .todo.client-only {
                    opacity: 0.5;
                }
                .todo.errored {
                    border: 1px solid #E91E63;
                    background-color: #FFEBEE;
                    font-size: 14px;
                }
                .add-todo {
                    font-size: 14px;
                }
                .add-todo input {
                    padding: 10px;
                    border: 1px solid #eee;
                }
                .add-todo button {
                    padding: 8px 20px;
                    margin: 0 0 0 5px;
                }
            `}</style>
        </div>
    )
}