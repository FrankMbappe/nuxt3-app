// Projects
export const useProjects = () => useState("projects", () => {
    return useFetch("/api/projects").data;
});

// Knowledges
export const useKnowledges = () => useState("knowledges", () => {
    return useFetch("/api/knowledges").data;
});
