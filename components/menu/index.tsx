import { NextPage } from 'next'
import React from 'react'
import menus from './menuConfig';
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';
import { removeAuthData } from '@/lib/auth';
import { useRouter } from 'next/router';

interface Props {
    children: React.ReactNode;
}

const SideMenu: NextPage<Props> = ({ children }) => {
    const handleSignOut = () => {
        removeAuthData()
        window.location.href="/"
    }
    return (
        <div className="menu-container">
            <div className="menu-navbar">

            </div>
            <div className="menu-body">
                <div className="menu-side">
                    <ul>
                        {
                            menus.map((value, index) => (
                                <li className="menu-item">
                                    <value.icon />
                                    <h6 className="clear-mp">{value.title}</h6>
                                </li>
                            ))
                        }
                    </ul>

                    <div>
                        <div className="menu-item">
                            <SettingsIcon />
                            <h6 className="clear-mp">ตั้งค่า</h6>
                        </div>
                        <div className="menu-item" role='button' onClick={handleSignOut}>
                            <LogoutIcon />
                            <h6 className="clear-mp">signout</h6>
                        </div>
                    </div>
                </div>
                <div className="menu-page">
                    {children}
                </div>
            </div>

        </div>
    )
}

export default SideMenu