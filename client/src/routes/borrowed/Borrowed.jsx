import { useLoaderData } from "react-router-dom";
import axios from "axios";
import styles from "./borrowed.module.scss";
import InstrumentCard from "../../components/card/InstrumentCard.jsx";

export async function loader() {
  const token = localStorage.getItem("authToken");
  return await axios
    .get("http://localhost:8080/api/posts/your-instruments", {
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

function Borrowed() {
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
      <h2>The instruments you borrowed</h2>
      {posts.length === 0 && (
        <p>The musical instruments you borrowed will appear here</p>
      )}
      <div className={styles["post-container"]}>{postItems}</div>
    </main>
  );
}

export default Borrowed;
