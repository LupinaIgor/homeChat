import socket from "./MySocketIo";
import {toast} from "react-toastify";
import ChatMessageForm from "./ChatMessageForm";
import {useEffect, useState} from "react";
import ChatMessagesList from "./ChatMessagesList";

export default function ChatWrapper () {

    // const onConnect = () =>{
    //     toast.info('connect')
    // }
    //
    // const onDisconnect = () =>{
    //     toast.error('disconnect')
    // }
    //
    // socket.on('connect', onConnect);
    // socket.on('disconnect', onDisconnect);

                //Создаем MessageList-место для хранения сообщений чата
    const [messages, setMessages ] = useState([]);


                // Пишем, что происходит, когда отправляется new_message
    useEffect(() => {
        socket.on('new_message', (data) => {
            console.log(data)
            setMessages(prevMessages => [...prevMessages, data]);
        })
    //
    //     socket.on('new_name_user', (data) => {
    //         console.log(data)
    //         const msgToList = {
    //             name: data.oldNameUser,
    //             msg: ' User ' + data.oldNameUser + ' now known as ' + data.newNameUser,
    //             createdAt: data.createdAt
    //         }
    //         setMessages(prevMessages => [...prevMessages, msgToList]);
    //     })
    //
    //     socket.on('new_user_connection', (data) => {
    //         const msg = {
    //             name: data.name,
    //             createdAt: data.connectedAt,
    //             msg: " Welcome New User "
    //         }
    //         setMessages(prevMessages => [...prevMessages, msg]);
    //
    //     })
    //
    },[])


    return(
        <>
            <h1> Chat </h1>
            <ChatMessagesList messages={messages} />
            {/*<hr />*/}
            <ChatMessageForm />
            {/*<ChatNameForm />*/}
            {/*<ServerPing />*/}
        </>
    )
}