import { React, useState } from 'react'
import { Button } from '../node_modules/@nextui-org/button';
import styles from '../styles/Home.module.css';


function CourseButton(props){
    const [taken, setTaken] = useState("false");
    let toggleColor = (e) => {
        // console.log("input received");
        if (taken == "true") {
            console.log("change to false");
            setTaken("false");
        } else {
            console.log("change to true");
            setTaken("true");
        }
    }
    return (
        taken == "true" ? <Button className={styles.buttonTaken} onClick={toggleColor}>{props.course_name}</Button> : <Button className={styles.button} onClick={toggleColor}>{props.course_name}</Button> 
    )
}

export default CourseButton