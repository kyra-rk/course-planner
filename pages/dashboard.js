import Head from 'next/head';
import styles from '../styles/Home.module.css';
import {Button} from '../node_modules/@nextui-org/button'
import { useState } from 'react';
import {  Dropdown,  DropdownTrigger,  DropdownMenu,  DropdownSection,  DropdownItem} from '../node_modules/@nextui-org/dropdown';
export default function Home() {
    // javascript code goes here 
    const [major, setMajor] = useState(null);
    return (
      <div className={styles.container}>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        <main>
          <h1 className={styles.title}>
            Welcome to <a href="https://nextjs.org">Columbia Course Compass!</a>
          </h1>
          <div className={styles.grid}>
          <Dropdown>
          <DropdownTrigger>
            <Button className={styles.button}>
              Choose a Major
            </Button>
          </DropdownTrigger>
          <DropdownMenu aria-label="Static Actions"
            onAction={(key) => setMajor(key)}
          >
            <DropdownItem key="COMS">Computer Science</DropdownItem>
            <DropdownItem key="MATH">Mathematics</DropdownItem>
            <DropdownItem key="STAT">Statistics</DropdownItem>
            <DropdownItem key="ENG" className="text-danger" color="danger">
              English
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
  
        <Dropdown>
          <DropdownTrigger>
            <Button className={styles.button}>
              Add a Course
            </Button>
          </DropdownTrigger>
          <DropdownMenu aria-label="Static Actions"
            onAction={(key) => setAdd(key)}
          >
            <DropdownItem key="COMS3134">COMS3134</DropdownItem>
            <DropdownItem key="COMS1004">COMS1004</DropdownItem>
            <DropdownItem key="COMS3157">COMS3157</DropdownItem>
            <DropdownItem key="CSEE3827" className="text-danger" color="danger">
              CSEE3827
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        </div>
  
        <p> Your major is {major} </p>
  
          <div className={styles.grid}>
            <a href="https://nextjs.org/docs" className={styles.card}>
              <h3>Documentation &rarr;</h3>
              <p>Find in-depth information about Next.js features and API.</p>
            </a>
  
            <a href="https://nextjs.org/learn" className={styles.card}>
              <h3>Learn &rarr;</h3>
              <p>Learn about Next.js in an interactive course with quizzes!</p>
            </a>
  
            <a
              href="https://github.com/vercel/next.js/tree/canary/examples"
              className={styles.card}
            >
              <h3>Examples &rarr;</h3>
              <p>Discover and deploy boilerplate example Next.js projects.</p>
            </a>
  
            <a
              href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              className={styles.card}
            >
              <h3>Deploy &rarr;</h3>
              <p>
                Instantly deploy your Next.js site to a public URL with Vercel.
              </p>
            </a>
          </div>
        </main>
  
        <footer>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{' '}
            <img src="/vercel.svg" alt="Vercel" className={styles.logo} />
          </a>
        </footer>
  
        <style jsx>{`
          main {
            padding: 5rem 0;
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
          footer {
            width: 100%;
            height: 100px;
            border-top: 1px solid #eaeaea;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          footer img {
            margin-left: 0.5rem;
          }
          footer a {
            display: flex;
            justify-content: center;
            align-items: center;
            text-decoration: none;
            color: inherit;
          }
          code {
            background: #fafafa;
            border-radius: 5px;
            padding: 0.75rem;
            font-size: 1.1rem;
            font-family:
              Menlo,
              Monaco,
              Lucida Console,
              Liberation Mono,
              DejaVu Sans Mono,
              Bitstream Vera Sans Mono,
              Courier New,
              monospace;
          }
        `}</style>
  
        <style jsx global>{`
          html,
          body {
            padding: 0;
            margin: 0;
            font-family:
              -apple-system,
              BlinkMacSystemFont,
              Segoe UI,
              Roboto,
              Oxygen,
              Ubuntu,
              Cantarell,
              Fira Sans,
              Droid Sans,
              Helvetica Neue,
              sans-serif;
          }
          * {
            box-sizing: border-box;
          }
        `}</style>
      </div>
    );
  }
  