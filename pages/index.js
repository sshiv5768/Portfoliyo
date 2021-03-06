import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>💻 Shivlal Sharma</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Hi, I'm <a href="">Shivlal Sharma</a>
        </h1>

        <p className={styles.description}>
          @GoogleCloudReady Facilitator| HackClub Lead|<br></br> AngleHacks
          student ambassador|BlockChain Ethusiast{" "}
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>About Me &rarr;</h3>
            <p>
              Hi! I'm Shivlal Sharma, I'm passionate for contributing to
              Open-source, developing new projects, learning new things.
            </p>
          </a>

          <a href="" className={styles.card}>
            <h3>Projects &rarr;</h3>
            <p>
              Do you want to see some cool project that i have built, check it!
            </p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Contact Me &rarr;</h3>
            <p>
              Whether you have a question, want to say hi, or anything else that
              it may be , my inbox is always open!
            </p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Skills &rarr;</h3>
            <p>
              <li>Python</li>
              <li>ReactJs</li>
              <li>Django</li>
              <li>Flask</li>
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
