import { useLoaderData, useOutletContext } from "react-router-dom";
import axios from "axios";
import { Button, Flex } from "antd";
import { MegaphoneSimple } from "@phosphor-icons/react";
import InstrumentCard from "../../components/card/InstrumentCard.jsx";
import styles from "./home.module.scss";

export async function loader() {
  const token = localStorage.getItem("authToken");
  return await axios
    .get("http://localhost:8080/api/posts", {
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

  const postItems = posts.map((post) => {
    return (
      <InstrumentCard
        key={post.postId}
        postId={post.postId}
        userName={post.author.firstName}
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
        <div className={styles["post-container"]}>{postItems}</div>
      </div>
    </main>
  );
}

export default Home;
