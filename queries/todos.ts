import { useMutation, useQuery, useQueryClient } from "@tanstack/vue-query";

export const useCreateTodoMutation = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (newTitle: string) => {
            const response = await createTodo(newTitle);
    
            return response;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({
                predicate: (queries) => {
                    return queries.queryKey.includes("todos");
                }
            });
        }
    });
}

export const useTodosQuery = (todoGroupId: Ref<string | undefined>) => {
    const isEnabled = computed(() => todoGroupId.value !== undefined);

    return useQuery({
        queryFn: async () => {
            const todoGroupIdValue = todoGroupId.value;
            if (todoGroupIdValue === undefined) return Promise.reject("Call this with a valid id");

            const response = await getTodos(todoGroupIdValue);
            return response;
        },
        queryKey: ['todos', todoGroupId],
        enabled: isEnabled,
    });
}