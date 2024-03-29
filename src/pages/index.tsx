import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import { Input, Button } from 'antd'
import { useState } from 'react'
import AuthServices from '@/services/authServices'
import { signIn, useSession, getSession, getCsrfToken, signOut, } from 'next-auth/react'
import { setAuthData } from '@/lib/auth'
import { useRouter } from "next/router";
export default function Home() {
  const router = useRouter();
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const handleLogin = async () => {
    // const res = await signIn('credentials', {
    //   redirect: true,
    //   email: email,
    //   password: password,
    // });
    const resp = await fetch("https://biddy-backend-api.vercel.app/api/auth/signin", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email, password: password }),
    });
    const user = await resp.json();
    if (user) {
      router.push("/home")
      setAuthData(user)
    }

  }
  return (
    <>
      <Head>
        <title>Biddy Login</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="/logoicon.svg" />
      </Head>
      <main>
        <div className="login-container">
          <div className="login-card">
            <div className="row-form">
              <img src="/icons/logoicon.svg" alt='logoicon' />
            </div>
            <div className="row-form">
              <h4>Biddy Login</h4>
            </div>
            <div className="row-form">
              <div className="login-form">
                <Input placeholder='Username' size='large' value={email} onChange={(e) => setEmail(e.target.value)} />
                <Input.Password placeholder="input password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <Button type='primary' style={{ width: "100%" }} onClick={handleLogin}>Login</Button>
              </div>
            </div>

          </div>
        </div>
      </main>
    </>
  )
}
