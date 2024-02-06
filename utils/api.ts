type Todo = {
    id: string;
    title: string;
    completed: boolean;
};

let todos: Todo[] = [];

export const getTodoById = async (id: string) => {
    console.log("...getting todo", id);

    await sleep(500);

    return todos.find((todo) => todo.id === id);
}