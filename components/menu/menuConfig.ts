import { menuItem } from "@/model/imenuconfig"
import HomeIcon from '@mui/icons-material/Home';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

const menus: menuItem[] = [
    {
        key: 'home',
        icon: HomeIcon,
        title: "หน้าหลัก",
        href: "/home",
        sub:[],
        role:["SA","ADM"]
    },
    {
        key: 'machinery',
        icon: AccountBoxIcon,
        title: "โปรไพล์",
        href: "/vehicles",
        role:["PR"],
        sub:[]
    },

]

export default menus