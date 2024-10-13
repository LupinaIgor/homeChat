import {io} from 'socket.io-client';
import {toast} from "react-toastify";

const URL = 'http://localhost:3030';

const socket = io(URL);
const onConnect = () =>{
    toast.info('connect')
}

const onDisconnect = () =>{
    toast.error('disconnect')
}

socket.on('connect', onConnect);
socket.on('disconnect', onDisconnect);

//
// // Появится тост с id нового пользователя, что только подсоединился
// socket.on('new_user_connection', (data) => {
//     toast.info('New User: ' + data.socket_id);
// })
//
//
// // Появится тост с текстом нового сообщения, что записывается в инпут
// socket.on('new_message', (data) => {
//     toast.info('New Message: ' + data);
// })
//

export default socket;