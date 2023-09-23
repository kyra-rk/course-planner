import Head from 'next/head';
import styles from '../styles/Home.module.css';
import {Button} from '../node_modules/@nextui-org/button'
import { useState } from 'react';
import {  Dropdown,  DropdownTrigger,  DropdownMenu,  DropdownSection,  DropdownItem} from '../node_modules/@nextui-org/dropdown';
export default function Home() {
  return(
    <main> 
       <h1 className={styles.title}> Welcome to <b>Columbia Course Compass!</b> </h1>
       <div className={styles.title}>
            <Dropdown>
            <DropdownTrigger>
              <Button className={styles.button}>
                Choose your School
              </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Static Actions"
              onAction={(key) => setMajor(key)}
            >
              <DropdownItem key="SEAS">School of Engineering and Applied Science</DropdownItem>
              <DropdownItem key="CC">Columbia College/General Studies</DropdownItem>
              <DropdownItem key="BN">Barnard</DropdownItem>
            </DropdownMenu>
            </Dropdown>
        </div>
        <div className={styles.title}>
            <Dropdown>
            <DropdownTrigger>
              <Button className={styles.button}>
                Select your Major
              </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Static Actions"
              onAction={(key) => setMajor(key)}
            >
              <DropdownItem key="1">Anthropology</DropdownItem>
              <DropdownItem key="2">Architecture</DropdownItem>
              <DropdownItem key="3">Biology</DropdownItem>
              <DropdownItem key="4">Chemistry</DropdownItem>
              <DropdownItem key="5">Computer Science</DropdownItem>
              <DropdownItem key="6">Data Science</DropdownItem>
              <DropdownItem key="7">Economics</DropdownItem>
              <DropdownItem key="8">Education</DropdownItem>
              <DropdownItem key="9">Engineering </DropdownItem>
              <DropdownItem key="9">English </DropdownItem>
              <DropdownItem key="10">History</DropdownItem>
              <DropdownItem key="11">Mathematics</DropdownItem>
              <DropdownItem key="12">Philosophy</DropdownItem>
              <DropdownItem key="13">Physics </DropdownItem>
              <DropdownItem key="14">Political Science</DropdownItem>
              <DropdownItem key="15">Sociology</DropdownItem>
              
            </DropdownMenu>
            </Dropdown>
        </div>
      <style jsx global>{`
              body { }
              b {
                color: blue;
                font-weight: 700;
              }
      `}</style>
    
    </main>
    
    
  );
}
