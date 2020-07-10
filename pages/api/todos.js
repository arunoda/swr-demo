import { getTodos } from "../../lib/todos";

export default function todos(req, res) {
    if (req.method === 'GET') {
        res.send(getTodos())
        return
    }

    res.status(404).send('Invalid HTTP Method')
}