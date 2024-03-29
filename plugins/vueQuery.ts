import { VueQueryPlugin, QueryClient } from "@tanstack/vue-query";

export default defineNuxtPlugin((nuxt) => {
  const queryClient = new QueryClient({
    defaultOptions: { queries: { staleTime: 30000 } },
  });

  nuxt.vueApp.use(VueQueryPlugin, { queryClient });
});
