import { React, useState } from 'react'
import { Button } from '@nextui-org/react';
import styles from '../styles/Home.module.css';
import { Cohere } from "langchain/llms/cohere";
import { PromptTemplate } from "langchain/prompts";
import { LLMChain } from "langchain/chains";
import COHERE_API_KEY from "../.env";
//import {classes_taken, classes_I_can_take_in_future } from "./CourseButton.js";
import StatePool  from 'state-pool';


function RecommendationButton(props){
    // how do I check to see if the recommendation button has been clicked??
    let recs = async (e) => {
        var classesTaken = localStorage.getItem("classesTaken");
        var classesICanTakeInFuture = localStorage.getItem("classesICanTakeInFuture");

        //classesTaken = StatePool.useState("classesTaken");
        //classesICanTakeInFuture = StatePool.useState("classesICanTakeInFuture");
    
        console.log("GENERATING RECS...");
        console.log("CLASSES TAKEN: " + classesTaken);
        console.log("CLASSES I CAN TAKE IN FUTURE: " + classesICanTakeInFuture);

        let result = await generateRec(JSON.parse(classesTaken), JSON.parse(classesICanTakeInFuture));
        console.log("SUGGESTIONS: " + result);
        //localStorage.setItem("suggestions", JSON.parse(result));
        alert("Your recommendations are: " + JSON.stringify(result));
    }
    
    return <Button className={styles.button} onClick={recs}>{"Generate Recommendations"} </Button>;
}  

async function generateRec(my_classes, classes_leftover){
    const model = new Cohere({
        apiKey: "API KEY HERE",
    });

    const prompt = PromptTemplate.fromTemplate(`You are a course planning assistant that suggests courses to students based on the courses they previously took.
You will be given a list of courses that the student has taken and a list of the remaining courses that are available to take. Based on the courses that the students 
took, identify the main keywords from the list of classes that the student took. Then, use these keywords to match them to the remaining coures that are available to take.
Finally, suggest 4 to 5 courses from the remaining courses that the student should take next.

Classes Taken: {classes_taken}
Remaining Courses: {remaining_courses}

Your answer should be in the following JSON format:
{{
    "keywords": [list] (relevant keywords from the classes taken),
    "suggestions": [list] (names of suggested courses)
}}
`);
    const chain = new LLMChain({ llm: model, prompt});
    const result = await chain.call( {classes_taken: my_classes, remaining_courses: classes_leftover} );
    console.log(result);
    return result;
}

export default RecommendationButton;