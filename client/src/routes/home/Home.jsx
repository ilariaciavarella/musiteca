import { Button, Flex } from "antd";
import { MegaphoneSimple } from "@phosphor-icons/react";
import styles from "./home.module.scss";
import InstrumentCard from "../../components/card/InstrumentCard.jsx";
import { useOutletContext } from "react-router-dom";

function Home() {
  const [setIsFormOpen, user] = useOutletContext();

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
          <InstrumentCard
            userName="Marco"
            userPic="https://i.pravatar.cc/300"
            createdTime={12}
            userLocation="Turin"
          />
        </div>
      </div>
    </main>
  );
}

export default Home;
