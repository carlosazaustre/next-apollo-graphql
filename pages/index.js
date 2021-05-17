import { useQuery, gql } from "@apollo/client";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

import client from "../client";

const GET_ITEMS = gql`
  query {
    items {
      id
      title
      url
    }
  }
`;

export default function Home() {
  const { error, loading, data } = useQuery(GET_ITEMS);

  if (error) return <div>Error :( {error.message}</div>;
  if (loading) return <div>Loading...</div>;

  const { items } = data;

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Next + GraphQL w/ Apollo</h1>

        <ul>
          {items.map((item) => (
            <li key={item.id}>
              <Link href={`/item/${item.id}`}>
                <a>
                  {item.title} <em>({item.url})</em>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}

// export async function getStaticProps() {
//   const { data } = await client.query({ query: GET_ITEMS });

//   return {
//     props: {
//       items: data.items,
//       revalidate: 1,
//     },
//   };
// }
