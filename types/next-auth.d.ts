import NextAuth, { DefaultSession } from "next-auth"
import { JWT } from "next-auth/jwt"
declare module "next-auth" {
    /**
     * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
     */
    interface Session {
        accesstoken: string,
        user: {
            "id": string,
            "email": string,
            "firstname": string,
            "lastname": string,
            "tel": string,
            "status_active": boolean
            "role":string
        } & DefaultSession["user"]
    }
}


declare module "next-auth/jwt" {
    interface JWT {
        "id": string,
        "email": string,
        "firstname": string,
        "lastname": string,
        "tel": string,
        "status_active": boolean
        "accesstoken":string
        "role":string
    }
}