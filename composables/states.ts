export const useProjects = () => useState("projects", () => {
    const { data } = useFetch("/api/projects", {
        pick: ["id", "title"] as any
    });
    return data;
});
