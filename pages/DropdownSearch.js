import { React, useState } from 'react'
import data from "./data/CoreRequirements.json"
import {  Dropdown,  DropdownTrigger,  DropdownMenu,  DropdownSection,  DropdownItem} from '../node_modules/@nextui-org/dropdown';


function DropdownSearch(inputText, setCourse) {

    const filteredData = data.filter((el) => {
        console.log(inputText);
        if (inputText === ''){
            console.log("drop empty INPUT");
            return el;
        } else {
            console.log("drop in");
            console.log(el);
            return el.course_name.toLowerCase().includes(inputText);
        }
    })

    return (
        <div>
            {console.log("HI")}
        {filteredData.map((item) => (
            console.log(item.course_name)
            // <p>{item.course_name}</p>
            // <DropdownItem key={item.id}>{item.course_name}</DropdownItem>
        ))}
        <Dropdown>
        <DropdownMenu aria-label="Static Actions"
            onAction={(key) => setCourse(key)}
          >
            {filteredData.map((item) => (
                // <p>{console.log("DROPITEM");}</p>
                <DropdownItem key={item.id}>{item.course_name}</DropdownItem>
            ))}
        </DropdownMenu>
        </Dropdown>
        </div>
    )
}

export default DropdownSearch