import { NextPage } from "next";
import withAuth from "../../lib/withAuth";
import { User } from "@/lib/auth";
import PostCard from "../../../components/genneral/postcard";

interface HomeProps {
  userData: User;
}

const Home: NextPage<HomeProps> = ({ userData }) => {
  return (
    <div className="home-container">
      <div className="home-post-container">
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </div>

    </div>
  );
};

export default withAuth(Home, ['Admin', 'User']);
