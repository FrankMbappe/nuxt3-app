import { acceptHMRUpdate, defineStore } from "pinia";

export const useUsers = defineStore("users", {
    state: () => ({
        count: 0,
        modifiedTimes: 0,
        users: [] as object[]
    }),
    getters: {
        getUsers: state => state.users,
        getEdits: state => state.modifiedTimes,
        getUserById: (state) => {
            return userId => state.users.find(user => user.id === userId);
        }
    },
    actions: {
        async setUsers(num: number) {
            const { data, error } = await useFetch(`/api/users?num=${num}`);

            if (error !== null) {
                this.$patch((state) => {
                    state.users = data;
                    state.modifiedTimes++;
                });
            }
        }
    }
});

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useUsers, import.meta.hot));
}
