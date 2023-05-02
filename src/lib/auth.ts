export interface User {
    "id": string,
    "email": string,
    "firstname": string,
    "lastname": string,
    "tel": string,
    "status_active": boolean
    "role": string,
    "accesstoken": string
}

export interface AuthData {
    user: User;
}

// บันทึกข้อมูลการ login ใน LocalStorage
export const setAuthData = (authData: User) => {

    localStorage.setItem("authData", JSON.stringify({ user: authData } as AuthData));
};

// อ่านข้อมูลการ login จาก LocalStorage
export const getAuthData = (): AuthData | null => {
    const authData = localStorage.getItem("authData");
    return authData ? JSON.parse(authData) : null;
};

// ลบข้อมูลการ login จาก LocalStorage
export const removeAuthData = () => {
    localStorage.removeItem("authData");
};
