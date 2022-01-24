export const useProjects = () => useState("projects", () => {
    const { data } = useFetch("/api/projects", {
        pick: ["id", "title"] as any
    });
    return data;
});

export const useKnowledges = () => useState("knowledges", () => {
    const { data } = useFetch("/api/knowledges", {
        pick: ["id", "title"] as any
    });
    return data;
});
