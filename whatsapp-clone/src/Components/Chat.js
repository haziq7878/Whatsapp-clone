import { Avatar, IconButton } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { BiSearchAlt2 } from "react-icons/bi";
import { MdAttachFile } from "react-icons/md";
import { FiMoreVertical } from "react-icons/fi";
import { BsEmojiLaughing } from "react-icons/bs";
import { BsFillMicFill } from "react-icons/bs";
import "./Chat.css";
import { useParams } from 'react-router-dom';
import Db from '../firebases';

function Chat() {
    const [input, setInput] = useState('')
    const [seed, setSeed] = useState('');
    const roomID = useParams();
    const [roomName, setRoomName] = useState('');

    // useEffect(() => {
    //     if (roomID) {
    //         Db.collection('room').doc(roomID).onSnapshot(snapshot =>
    //         (setRoomName(snapshot.data().name)
    //         ))
    //     }
    // }, [roomID])

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000))
    }, [])

    const sendMessage = (e) => {
        e.preventDefault();
        console.log("Your type", input);
        setInput('');
    }

    return (
        <div className='chat'>
            <div className='chat__header'>
                <Avatar src={`https://robohash.org/${seed}.png`} />
                <div className='chat__headerInfo'>
                    <h3>{roomName}</h3>
                    <p>Last seen at...</p>
                </div>
                <div className='chat__headerRight'>
                    <IconButton>
                        <BiSearchAlt2 />
                    </IconButton>
                    <IconButton>
                        <MdAttachFile />
                    </IconButton>
                    <IconButton>
                        <FiMoreVertical />
                    </IconButton>
                </div>
            </div>
            <div className='chat__body'>
                <p className={`chat__message ${true && 'chat__recevier'}`}>
                    <span className='chat__name'>Haziq</span>
                    Hey guys
                    <span className='chat__timestamp'>3.32pm</span>
                </p>
            </div>
            <div className='chat__footer'>
                <IconButton>
                    <BsEmojiLaughing />
                </IconButton>
                <form>
                    <input value={input} onChange={(e) =>
                        setInput(e.target.value)
                    }
                        placeholder='Type a message'
                        type='text' />
                    <button onClick={sendMessage} type='submit'>Send a message</button>
                </form>
                <IconButton>
                    <BsFillMicFill />
                </IconButton>
            </div>
        </div>
    );
}

export default Chat;
