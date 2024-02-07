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

    const clonedTodos = [...todos];

    if (!searchTerm) {
        return clonedTodos;
    }

    return clonedTodos.filter((todo) => todo.title.toLowerCase().includes(searchTerm.toLowerCase()));
};

export const createTodo = async (title: string) => {
    console.log("...adding todo", title);

    await sleep(500);

    const newTodo = {
        id: String(todos.length + 1),
        title,
    };

    todos.push(newTodo);

    return newTodo;
}