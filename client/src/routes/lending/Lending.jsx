import { useLoaderData } from "react-router-dom";
import axios from "axios";
import InstrumentCard from "../../components/card/InstrumentCard.jsx";
import "../../assets/global-styles/main.scss";

export async function loader() {
  const token = localStorage.getItem("authToken");
  return await axios
    .get("http://localhost:8080/api/posts/lending-instruments", {
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

function Lending() {
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
    <main className="main-container">
      <h2>Instruments you are lending</h2>
      {posts.length === 0 && (
        <p>The musical instruments you are willing to lend will appear here</p>
      )}
      <div className="post-container">{postItems}</div>
    </main>
  );
}

export default Lending;
