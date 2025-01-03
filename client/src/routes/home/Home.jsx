import {
  useLoaderData,
  useNavigation,
  useOutletContext,
} from "react-router-dom";
import axios from "axios";
import { Button, Flex, Spin } from "antd";
import { MegaphoneSimple } from "@phosphor-icons/react";
import InstrumentCard from "../../components/card/InstrumentCard.jsx";
import "../../assets/global-styles/main.scss";

export async function loader() {
  const token = localStorage.getItem("authToken");
  return await axios
    .get(`${import.meta.env.VITE_API_URL}/api/posts`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      return { posts: response.data };
    })
    .catch((error) => {
      console.error(error);
    });
}

function Home() {
  const [setIsFormOpen, user] = useOutletContext();
  const { posts } = useLoaderData();
  const navigation = useNavigation();

  const postItems = posts.map((post) => {
    return (
      <InstrumentCard
        key={post.postId}
        postId={post.postId}
        userName={`${post.author.firstName} ${post.author.lastName}`}
        userEmail={post.author.email}
        userLocation={post.author.location}
        creationDate={post.creationDate}
        picture={post.image}
        body={post.body}
        instrument={post.instrument}
        brand={post.brand}
        age={post.age}
        available={post.available}
        borrowedBy={post.borrowedBy}
      />
    );
  });

  return (
    <main className="main-container">
      <Flex wrap align="center" justify="space-between" gap="middle">
        <div className="greeting">Hi {user.firstName}!</div>
        <Button
          type="primary"
          icon={<MegaphoneSimple size={20} />}
          onClick={() => setIsFormOpen(true)}
        >
          Lend your instrument
        </Button>
      </Flex>
      <div className="feed-post">
        <h3>Explore the latest posts</h3>
        <div className="post-container">{postItems}</div>
      </div>
      <Spin
        spinning={navigation.state === "loading"}
        size="large"
        className="spinner"
      />
    </main>
  );
}

export default Home;
