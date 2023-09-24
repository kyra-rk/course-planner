import Head from 'next/head';
import styles from '../styles/Home.module.css';
import {Button} from '../node_modules/@nextui-org/button'
import { useState } from 'react';
import TextField from "../node_modules/@mui/material/TextField";
import {View, Text, TextInput}  from '../node_modules/react';
import { Router, Route, Switch } from '../node_modules/react-dom';
import {  Dropdown,  DropdownTrigger,  DropdownMenu,  DropdownSection,  DropdownItem} from '../node_modules/@nextui-org/dropdown';
export default function Home() {
  const [major, setMajor] = useState(null);
  const [school, setSchool] = useState(null);
  const [name, setName] = useState(null);
  const [uni, setUni] = useState(null);
  let inputHandler = (e) => {
    console.log("input received");
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
}
  return(
    <main className={styles.title}> 
    <h1 className="welcome-to-columbia"><b> Welcome to Columbia Course Compass!</b> </h1>

      <div className={styles.box}>

        <div className={styles.lab}><c>Login</c></div>
        <e>
        <TextField className={styles.label}
          id="outlined-basic"
          onChange={inputHandler}
          variant="outlined"
          fullWidth
          label="Name"
        />
        </e>
        <e>
        <TextField className={styles.label}
          id="outlined-basic"
          onChange={inputHandler}
          variant="outlined"
          fullWidth
          label="UNI"
        />
        </e>
       <div>
       <div>
            <Dropdown className={styles.button}>
            <DropdownTrigger>
              <Button className={styles.button}>
                <c>Choose your School</c>
              </Button>
              
            </DropdownTrigger>
            <DropdownMenu aria-label="Static Actions"
              onAction={(key) => setSchool(key)}
            >
              <DropdownItem key="BN">Barnard</DropdownItem>
              <DropdownItem key="CC">Columbia College/General Studies</DropdownItem>
              <DropdownItem key="SEAS">School of Engineering and Applied Science</DropdownItem>

            </DropdownMenu>
            </Dropdown>
            </div>
        </div>
        
        <div>
            <Dropdown className={styles.button}>
            <DropdownTrigger>
              <Button className={styles.button}>
                <c>Select your Major</c>
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
        <div>
        <Button className={styles.button} text="Submit" onClick={() => console.log()}>
        <a href="/dashboard"><c>Submit</c></a>
        </Button>
        </div>
        
      <style jsx global>{`
              body { 
                background-color: #8ccae7;
              }
              b {
                color: rgb(0,45,106);
                font-weight: 700;
                font-family: "Inter-Bold", Helvetica;
                font-size: 64px;
                font-weight: 700;
              }
              c{
                font-family: "Inter-Bold", Helvetica;
                font-size: 20px;
              }
              e{
                width: 20%;
              }
              
      `}</style>
    




      </div>
       
       
    </main>
    
    
  );
 
}
