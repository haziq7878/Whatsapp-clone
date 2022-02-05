import { Avatar, IconButton } from '@material-ui/core';
import React, { useEffect, useState, useCallback } from 'react';
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
    const roomId = useParams();
    const [roomName, setRoomName] = useState('');
    const [rooms, setRooms] = useState([]);
    const [message, setMessages] = useState();


    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
        if (roomId) {
          Db.collection("rooms")
            .doc(roomId.roomID)
            .onSnapshot((snapshot) => {
              setRoomName(snapshot.data().name);
            });

        //   Db.collection("rooms")
        //     .doc(roomId)
        //     .collection("messages")
        //     .orderBy("timestamp", "asc")
        //     .onSnapshot((snapshot) => {
        //       setMessages(snapshot.docs.map((doc) => doc.data()));
        //     });
        }
      }, [roomId]);

    // useEffect(() => {
    //     Db.collection('rooms').onSnapshot(snapshot => (
    //         setRooms(snapshot.docs.map(doc => (
    //             {
    //                 id: doc.id,
    //                 data: doc.data(),
    //             }
    //         )
    //         ))
    //     ))

    //     rooms.map(rooms => {
    //         if (roomId.roomID === rooms.id) {
    //             console.log("matched")
    //             setRoomName(rooms.data.name)
    //         }
    //     })
        // Db.collection("rooms")
        //     .doc(roomId)
        //     .collection("messages")
        //     .orderBy("timestamp", "asc")
        //     .onSnapshot((snapshot) => {
        //         setMessages(snapshot.docs.map((doc) => doc.data()));
        //     });

    // }, [roomId])

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
