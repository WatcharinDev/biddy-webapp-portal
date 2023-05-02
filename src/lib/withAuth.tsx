import { NextPage } from "next";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { getAuthData, User } from "./auth";
import SideMenu from "../../components/menu";

export interface AuthProps {
  userData: User;
}

const withAuth = (WrappedComponent: NextPage<AuthProps>, roles: string[]) => {
  const Wrapper = (props: AuthProps) => {
    const router = useRouter();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [session, setSession] = useState<AuthProps>({
      userData: {
        "id": "",
        "email": "",
        "firstname": "",
        "lastname": "",
        "tel": "",
        "status_active": false,
        "role": "",
        "accesstoken": ""
      }
    })
    useEffect(() => {
      const authData = getAuthData();

      if (!authData) {
        router.push("/");
      } else {
        if (roles.includes("Admin")) {
          setSession({ userData: authData.user } as AuthProps);
          setIsAuthenticated(true);
        } else {
          router.push("/");
        }
      }
    }, []);

    return isAuthenticated && session ? <SideMenu><WrappedComponent {...session} /></SideMenu> : null;
  };

  return Wrapper;
};

export default withAuth;
