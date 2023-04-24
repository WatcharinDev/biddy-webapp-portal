import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import { Input, Button } from 'antd'


export default function Home() {
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
                <Input placeholder='Username' size='large' />
                <Input.Password placeholder="input password" />
                <Button type='primary' style={{ width: "100%" }}>Login</Button>
              </div>
            </div>

          </div>
        </div>
      </main>
    </>
  )
}
