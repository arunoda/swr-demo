import { addTodo } from "../../lib/todos";

export default async function todos(req, res) {
    if (req.method === 'POST') {
        if (!req.body.name || String(req.body.name).trim() === '') {
            res.status(400).send({
                error: {
                    message: 'Todo name is required!'
                }
            })
            return
        }

        const todo = await addTodo({name: req.body.name})
        res.send(todo)
        return
    }

    res.status(404).send('Invalid HTTP Method')
}