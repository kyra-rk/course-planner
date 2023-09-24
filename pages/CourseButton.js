import { React, useState } from 'react'
import { Button } from '@nextui-org/react';
import styles from '../styles/Home.module.css';
import { createStore } from 'state-pool';
import { Cohere } from "langchain/llms/cohere";
import { PromptTemplate } from "langchain/prompts";
import { LLMChain } from "langchain/chains";
import COHERE_API_KEY from "../.env";
import AreaFoundations from "./data/AreaFoundations.json";
import CoreRequirements from "./data/CoreRequirements.json";
import Electives from "./data/Electives.json";

/*const store = createStore();
store.setState("classesTaken", JSON.stringify([]));  
store.setState("classesICanTakeInFuture", JSON.stringify([]));*/
if(typeof(window) !== "undefined"){
    localStorage.setItem("classesTaken", JSON.stringify([]));
    localStorage.setItem("classesICanTakeInFuture", JSON.stringify([]));   
    var classesICanTakeInFuture = localStorage.getItem("classesICanTakeInFuture");
    var l_classesICanTakeInFuture = JSON.parse(classesICanTakeInFuture);
    for (var i = 0; i < AreaFoundations.length; i++) {
        l_classesICanTakeInFuture.push(AreaFoundations[i].course_name);
    }
    for (var i = 0; i < Electives.length; i++) {
        l_classesICanTakeInFuture.push(Electives[i].course_name);
    }
    classesICanTakeInFuture = JSON.stringify(l_classesICanTakeInFuture);
    localStorage.setItem("classesICanTakeInFuture", classesICanTakeInFuture);
}


function CourseButton(props){
    const [taken, setTaken] = useState("false");

    /*var [classesTaken, setClassesTaken] = store.useState("classesTaken");
    var [classesICanTakeInFuture, setClassesICanTakeInFuture] = store.useState("classesICanTakeInFuture");*/

    let toggleColor = (e) => {
        // console.log("input received");
        var classesTaken = localStorage.getItem("classesTaken");
        //var classesICanTakeInFuture = localStorage.getItem("classesICanTakeInFuture");    
        var l_classesTaken = JSON.parse(classesTaken);
        //var l_classesICanTakeInFuture = JSON.parse(classesICanTakeInFuture);

        if (taken == "true") {
            console.log("change to false");
            setTaken("false");
            //l_classesICanTakeInFuture.push(props.course_name);
            //classesICanTakeInFuture = JSON.stringify(l_classesICanTakeInFuture);
            //localStorage.setItem("classesICanTakeInFuture", classesICanTakeInFuture);

            //setClassesICanTakeInFuture(classesICanTakeInFuture);
            //
            //console.log("FUTURE CLASSES: " + classesICanTakeInFuture)
        } else {
            console.log("change to true");
            setTaken("true");
            l_classesTaken.push(props.course_name);
            classesTaken = JSON.stringify(l_classesTaken);
            localStorage.setItem("classesTaken", classesTaken);
            //setClassesTaken(classesTaken);
            //
            console.log("CURRENT CLASSES: " + classesTaken);
        }
    }
    return (
        taken == "true" ? <Button className={styles.buttonTaken} onClick={toggleColor}>{props.course_name}</Button> : <Button className={styles.button} onClick={toggleColor}>{props.course_name}</Button> 
    )
}

export default CourseButton