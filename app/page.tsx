import styles from "./page.module.css";
import Image from "next/image";

import NewsList from "./_components/NewsList";
import ButtonLink from "./_components/ButtonLink";
import { News } from "./_libs/microcms";

const data: { contents: News[] } = {
  contents: [
    {
      id: "1",
      title: "渋谷にオフィスを移設しました",
      category: {
        name: "更新情報",
      },
      publishedAt: "2025/02/16",
      createdAt: "2025/02/16",
    },
    {
      id: "2",
      title: "当社 CEO 日馬陽平が業界リーダ TOP 30 に選出されました",
      category: {
        name: "更新情報",
      },
      publishedAt: "2025/02/16",
      createdAt: "2025/02/16",
    },
  ],
};

export default function Home() {
  const sliceData = data.contents.slice(0, 2);

  return (
    <>
      <section className={styles.top}>
        <div>
          <h1 className={styles.title}>テクノロジーの力で世界を変える</h1>
          <p className={styles.description}>
            私たちは市場をリードしている global tech company です。
          </p>
        </div>
        <Image
          className={styles.bgimg}
          src="/img-mv.jpg"
          alt=""
          width={4000}
          height={1200}
        />
      </section>
      <section className={styles.news}>
        <h2 className={styles.newsTitle}>News</h2>
        <NewsList news={sliceData} />
        <div className={styles.newsLink}>
          <ButtonLink href="/news">もっと見る</ButtonLink>
        </div>
      </section>
    </>
  );
}
