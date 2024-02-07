type Todo = {
    id: string;
    title: string;
};

let todos: Todo[] = [{
    id: "1",
    title: "Prepare a presentation for tanstack query",
}, {
    id: "2",
    title: "Call an ambulance (not for me)",
}];


export const getTodos = async (searchTerm?: string) => {
    console.log("...getting todos");

    await sleep(500);

    if (!searchTerm) {
        return todos;
    }

    return todos.filter((todo) => todo.title.toLowerCase().includes(searchTerm.toLowerCase()));
};

export const getTodoById = async (id: string) => {
    console.log("...getting todo", id);

    await sleep(500);

    return todos.find((todo) => todo.id === id);
}

export const addNewTodo = async (title: string) => {
    console.log("...adding todo", title);

    await sleep(500);

    const newTodo = {
        id: String(todos.length + 1),
        title,
    };

    todos.push(newTodo);

    return newTodo;
}