import axios, { AxiosResponse } from "axios";
import authHeader from "../../common/auth/authHeader";
const AuthServices = {

    login: (data: any): Promise<any> => {
        return new Promise<any>((resolve, reject) => {
            axios({
                headers: authHeader(""),
                method: "POST",
                url:  `https://biddy-backend-api.vercel.app/api/auth/signin`,
                data: data
            }).then((response: AxiosResponse<any>) => resolve(response.data)).catch(error => reject(error))
        })

    },
    GetTest: (): Promise<any> => {
        return new Promise<any>((resolve, reject) => {
            axios({
                headers: authHeader(""),
                method: "GET",
                url:  `https://biddy-backend-api.vercel.app/api/auth/test`,
            }).then((response: AxiosResponse<any>) => resolve(response.data)).catch(error => reject(error))
        })

    }
}
export default AuthServices;