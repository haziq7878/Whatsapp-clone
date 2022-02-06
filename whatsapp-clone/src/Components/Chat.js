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
import { useStateValue } from '../StateProvider';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

function Chat() {
    const [{ user }, dispatch] = useStateValue();
    const [input, setInput] = useState('')
    const [seed, setSeed] = useState('');
    const roomId = useParams();
    const [roomName, setRoomName] = useState('');
    const [rooms, setRooms] = useState([]);
    const [messages, setMessages] = useState();


    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
        if (roomId) {
            Db.collection("rooms")
                .doc(roomId.roomID)
                .onSnapshot((snapshot) => {
                    setRoomName(snapshot.data().name);
                });

            Db.collection("rooms")
                .doc(roomId.roomID)
                .collection("messages")
                .orderBy("timestamp", "asc")
                .onSnapshot((snapshot) => {
                    setMessages(snapshot.docs.map((doc) => doc.data()));
                });
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
        Db.collection('rooms').doc(roomId.roomID).collection('messages')
            .add({
                message: input,
                name: user.displayName,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            });
        setInput('');
    }

    return (
        <div className='chat'>
            <div className='chat__header'>
                <Avatar src={`https://robohash.org/${seed}.png`} />
                <div className='chat__headerInfo'>
                    <h3>{roomName}</h3>
                    <p>last seen
                        {messages? new Date(
                            messages[messages.length - 1]?.timestamp?.toDate()
                        ).toUTCString():""}</p>
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
                {messages?.map(message => (
                    <p className={`chat__message ${message.name === user.displayName && 'chat__recevier'}`}>
                        <span className='chat__name'>{message.name}</span>
                        {message.message}
                        <span className='chat__timestamp'>
                            {new Date(message?.timestamp?.toDate()).toUTCString()}
                        </span>
                    </p>
                ))}
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
