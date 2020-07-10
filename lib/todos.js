const store = [
    {id: 1, name: 'Learn Next.js'},
    {id: 2, name: 'Learn SWR'},
]
let nextId = 3;

export function getTodos() {
    return store;
}

export async function addTodo({name}) {
    await new Promise(resolve => setTimeout(resolve, 1000))
    const item = {
        name,
        createdAt: Date.now(),
        id: nextId++
    }
    store.push(item)

    return item
}