import { Avatar } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import './SidebarChat.css';


function SidebarChat({id,name,addNewChat}){
    const [seed,setSeed] = useState(''); // This is for generating random numbers and 
    //store it in seed

    useEffect(()=>{
        setSeed(Math.floor(Math.random()*5000))
    },[])

    const createChat=()=>{
        const roomName = prompt("Please enter name for chat");

        if (roomName){
            // do some clever database stuff
        }
    }

    return !addNewChat ? (
        <div className="sidebarChat">
            {/* <Avatar src='https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50'/> */}
            <Avatar src={`https://robohash.org/${seed}.png`}/>
            <div className="sidebarChat__info">
                <h2>{name}</h2>
                <p>Last message</p>
            </div>
        </div>
    ):(
        <div onClick={createChat} className="sidebarChat">
            <h2>Add new Chat </h2>
        </div>
    );
}
export default SidebarChat