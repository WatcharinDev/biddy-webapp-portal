import { NextPage } from 'next'
import React from 'react'
import menus from './menuConfig';
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';
import { removeAuthData } from '@/lib/auth';
import Avatar from '@mui/material/Avatar';
interface Props {
    children: React.ReactNode;
}

const SideMenu: NextPage<Props> = ({ children }) => {
    const handleSignOut = () => {
        removeAuthData()
        window.location.href = "/"
    }
    return (
        <div className="menu-container">
            <div className="menu-navbar">
                <div className="biddy-logo">
                    <h4 className='clear-mp'>Biddy</h4>
                </div>
                <div className="menu-user">
                    <Avatar
                        alt="Remy Sharp"
                        src="/static/images/avatar/1.jpg"
                        sx={{ width: 40, height: 40 }}
                    />
                </div>

            </div>
            <div className="menu-body">
                <div className="menu-side">
                    <ul>
                        {
                            menus.map((value, index) => (
                                <li className="menu-item" key={index}>
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