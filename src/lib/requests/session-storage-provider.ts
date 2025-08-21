export function sessionStorageProvider() {
    if (typeof window === "undefined") {
        return new Map();
    }

    const map = new Map<string, any>(
        JSON.parse(sessionStorage.getItem("app-cache") || "[]"),
    );

    window.addEventListener("beforeunload", () => {
        const appCache = JSON.stringify(Array.from(map.entries()));
        sessionStorage.setItem("app-cache", appCache);
    });

    return map;
}
