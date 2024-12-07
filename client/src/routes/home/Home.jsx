import { Button, Flex } from "antd";
import { MegaphoneSimple } from "@phosphor-icons/react";

import styles from "./home.module.scss";

function Home() {
  return (
    <main className={styles["main-container"]}>
      <Flex align="center" justify="space-between">
        <div className={styles["greeting"]}>Hi!</div>
        <Button type="primary" icon={<MegaphoneSimple size={20} />}>
          Lend your instrument
        </Button>
      </Flex>
      <div className={styles["feed-post"]}>
        <h3>Explore the latest posts</h3>
      </div>
    </main>
  );
}

export default Home;
