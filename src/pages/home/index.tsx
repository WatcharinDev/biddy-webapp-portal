import { NextPage } from "next";
import withAuth from "../../lib/withAuth";
import { User } from "@/lib/auth";

interface HomeProps {
  userData: User;
}

const Home: NextPage<HomeProps> = ({ userData }) => {
  return (
    <div>
      <h6>Welcome {userData.email}</h6>
    </div>
  );
};

export default withAuth(Home, ['Admin','User']);
