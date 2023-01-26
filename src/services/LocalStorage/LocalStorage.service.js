export const LocalStorage = {
    get: (key) => localStorage.get(key),
    set: (key, value) => localStorage.set(key, value),
    remove: (key) => localStorage.removeItem(key),
    clear: () => localStorage.clear(),
}