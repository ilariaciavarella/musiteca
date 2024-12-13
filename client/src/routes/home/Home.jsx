import { Button, Flex } from "antd";
import { MegaphoneSimple } from "@phosphor-icons/react";

import styles from "./home.module.scss";
import InstrumentCard from "../../components/card/InstrumentCard.jsx";

function Home() {
  return (
    <main className={styles["main-container"]}>
      <Flex wrap align="center" justify="space-between" gap="middle">
        <div className={styles["greeting"]}>Hi!</div>
        <Button type="primary" icon={<MegaphoneSimple size={20} />}>
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
