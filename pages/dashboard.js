import Head from 'next/head';
import styles from '../styles/Home.module.css';
import {Button} from '../node_modules/@nextui-org/button'
import { useState } from 'react';
import {  Dropdown,  DropdownTrigger,  DropdownMenu,  DropdownSection,  DropdownItem} from '../node_modules/@nextui-org/dropdown';
import SearchBar from "./search-bar.js";
import core_req from "./data/CoreRequirements.json"
import area_found from "./data/AreaFoundations.json"
import electives from "./data/Electives.json"
import RecommendationButton from './RecommendationButton';

export default function Dashboard() {
    // javascript code goes here 
    const name = "Kyra Ramesh Krishna";
    const uni = "kr3026";
    const major = "Computer Science";
    const college = "Barnard College";

    return (
      <div className={styles.container}>
        <Head>
          <title>Columbia Course Compass</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div>
        </div>
        <main>
          <h1 className={styles.title}>
            Welcome to <span className={styles.colored}>Columbia Course Compass!</span>
          </h1>
          <h2> Your major is <span className={styles.italic}>{major}</span>.</h2>
          <div className={styles.gridcontainer}>
          <SearchBar className={styles.griditem} title="CS & Math Core Requirements" data={core_req}/>
          <SearchBar className={styles.griditem} title="Area Foundation Courses" data={area_found}/>
          <SearchBar className={styles.griditem} title="Elective Requirements" data={electives}/>
        </div>

        <RecommendationButton className={styles.button}>{"Generate Recommendations"}</RecommendationButton>
        
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
  