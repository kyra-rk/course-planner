import { React, useState } from 'react'
import { Button } from '../node_modules/@nextui-org/button';
import styles from '../styles/Home.module.css';
import CourseButton from './CourseButton';


function List(props) {

    const filteredData = props.data.filter((el) => {
        if (props.input === ''){
            console.log("EMPTY INPUT");
            return el;
        } else {
            console.log("NOT INPUT");
            return el.course_name.toLowerCase().includes(props.input);
        }
    })

    return (
        <ul className={styles.ul}>
            {filteredData.map((item) => (
                <CourseButton course_name={item.course_name}/>
                // <Button className={styles.button}>{item.course_name}</Button>
            ))}
        </ul>
    )
}

export default List