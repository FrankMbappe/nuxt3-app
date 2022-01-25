export const useCounter = () => useState<number>("counter", () => Math.round(Math.random() * 1000));
