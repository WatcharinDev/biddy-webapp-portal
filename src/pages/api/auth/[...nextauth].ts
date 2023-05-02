
import NextAuth from "next-auth";
import { JWT } from "next-auth/jwt";
import CredentialsProvider from "next-auth/providers/credentials";
export interface Credential {
    username: string,
    password: string
}
export default NextAuth({
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {},
            async authorize(credentials: any, req) {
                const credentialDetails = {
                    email: credentials.email,
                    password: credentials.password,
                };
                const resp = await fetch("https://biddy-backend-api.vercel.app/api/auth/signin", {
                    method: "POST",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(credentialDetails),
                });
                const user = await resp.json();
                if (user) {
                    return user;
                } else {
                    return null;
                }
            }
        })

    ],
    callbacks: {
        jwt: ({ token, user }): any => {
            if (user) {
                token = user as JWT
            }
            return token
        },
        session({ session, token, user }) {
            session.accesstoken = token.accesstoken
            session.user.email = token.email
            session.user.firstname = token.firstname
            session.user.lastname = token.lastname
            session.user.tel = token.tel
            session.user.status_active = token.status_active
            session.user.role="Admin"
            return session
        },
        async redirect({ url, baseUrl }) {
          return '/home'
        }
    },
    secret: "test",
    jwt: {
        secret: "test",
    },
    session: {
        maxAge: 30 * 60,
    },
    pages: {
        signIn: "/",
    },
});
