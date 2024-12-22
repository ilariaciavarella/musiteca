import { Button, Flex } from "antd";
import { MegaphoneSimple } from "@phosphor-icons/react";
import styles from "./home.module.scss";
import InstrumentCard from "../../components/card/InstrumentCard.jsx";
import { useLoaderData, useOutletContext } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

export async function loader() {
  const token = localStorage.getItem("authToken");
  const posts = (
    await axios.get("http://localhost:8080/api/posts", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
  ).data;

  return { posts };
}

function Home() {
  const [setIsFormOpen, user] = useOutletContext();
  const { posts } = useLoaderData();

  useEffect(() => {
    console.log(posts);
  }, []);

  const postItems = posts.map((post) => {
    return (
      <InstrumentCard
        key={post.id}
        userName={post.author.firstName}
        userLocation={post.author.location}
        picture={post.image}
        body={post.body}
        instrument={post.instrument}
        brand={post.brand}
        age={post.age}
      />
    );
  });

  return (
    <main className={styles["main-container"]}>
      <Flex wrap align="center" justify="space-between" gap="middle">
        <div className={styles["greeting"]}>Hi {user.firstName}!</div>
        <Button
          type="primary"
          icon={<MegaphoneSimple size={20} />}
          onClick={() => setIsFormOpen(true)}
        >
          Lend your instrument
        </Button>
      </Flex>
      <div className={styles["feed-post"]}>
        <h3>Explore the latest posts</h3>
        <div className={styles["post-container"]}>
          {postItems}
          {postItems}
        </div>
      </div>
    </main>
  );
}

export default Home;
