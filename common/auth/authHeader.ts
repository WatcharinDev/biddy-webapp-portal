
export default function authHeader(accessToken: string) {
    if (accessToken) {
        return {
            "Authorization": "Bearer " + accessToken,
            "Cache-Control": "no-cache, no-store, must-revalidate",
            "Pragma": "no-cache",
        };
    } else {
        return {
            "Cache-Control": "no-cache, no-store, must-revalidate",
            "Pragma": "no-cache",
            "Accept": "application/json"
        };
    }
}
