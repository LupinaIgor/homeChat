// import {Server} from "socket.allSocketServer";

// Создаем сервер

import { createServer } from "http";
import { Server } from "socket.io";

const httpServer = createServer();
const allSocketServer =
    new Server(httpServer, {
        cors: {
            origin: "*"
        }
    });

// Обработка подключения клиента
allSocketServer.on("connection",
    (oneUserSocket) => {
        //allSocketServer.emit('new_user_connection', {socket_id: oneUserSocket.id})
        console.log(`User connected: ${oneUserSocket.id}`);
        // Створити імя
       // oneUserSocket.name = oneUserSocket.id;

        // const newUser = {
        //     name: oneUserSocket.name,
        //     connectedAt: Date.now()
        // }
        //


        // Сообщить всем - что кто то открыл страницу
        // Появится тост с id нового пользователя, что только подсоединился
        allSocketServer.emit('new_user_connection', {socket_id: oneUserSocket.id})


        // Появится тост с текстом нового сообщения, что записывается в инпут
        oneUserSocket.on('new_message', (data) =>{
            allSocketServer.emit('new_message', data)
        })


        //
        // // Обработка сообщения от клиента - его пересылка всем, кто подключен
        // oneUserSocket.on('new_message_group', (data) => {
        //
        //     // {
        //     //     msg: // string
        //     //     groupName: //string
        //     // }
        //     const msg = {
        //         name: oneUserSocket.name,
        //         msg: data.msg,
        //         createdAt: Date.now()
        //     }
        //
        //     switch (data.groupName) {
        //         case 'car':
        //             allSocketServer.emit('new_message_car', msg);
        //             break;
        //         case 'it':
        //             allSocketServer.emit('new_message_it', msg);
        //             break;
        //         default:
        //             allSocketServer.emit('new_message', msg);
        //     }
        //
        //     allSocketServer.emit('new_message', msg);
        // })
        //
        //
        // oneUserSocket.on('new_name_user', (data) => {
        //
        //     const oldNameUser = oneUserSocket.name;
        //     const newNameUser = data;
        //
        //     oneUserSocket.name = newNameUser;
        //
        //     const msg = {
        //         oldNameUser: oldNameUser,
        //         newNameUser: newNameUser,
        //         createdAt: Date.now()
        //     }
        //
        //     allSocketServer.emit('new_name_user', msg);
        // })
        //
        // // Обработка сообщения от клиента - его пересылка всем, кто подключен
        // oneUserSocket.on('new_message', (data) => {
        //
        //     const msg = {
        //         name: oneUserSocket.name,
        //         msg: data,
        //         createdAt: Date.now()
        //     }
        //
        //     allSocketServer.emit('new_message', msg);
        // })
        //
        // // Обработка сообщения от клиента - его пересылка всем, кто подключен
        // oneUserSocket.on('new_message_cars', (data) => {
        //
        //     const msg = {
        //         name: oneUserSocket.name,
        //         msg: data,
        //         createdAt: Date.now()
        //     }
        //
        //     allSocketServer.emit('new_message_cars', msg);
        // })
        //
        // // Обработка сообщения от клиента - его пересылка всем, кто подключен
        // oneUserSocket.on('new_message_it', (data) => {
        //
        //     const msg = {
        //         name: oneUserSocket.name,
        //         msg: data,
        //         createdAt: Date.now()
        //     }
        //
        //     allSocketServer.emit('new_message_it', msg);
        // })

        // Обработка отключения клиента
        oneUserSocket.on("disconnect", () => {
            console.log(`User disconnected: ${oneUserSocket.id}`);
        });

        // oneUserSocket.on('ping', (data) => {
        //     console.log('--> ping from user '
        //         + oneUserSocket.name
        //         + ' ' + data)
        // })
    });

// setInterval(() => {
//     let d = Date.now()
//     console.log('ping users -->: ' + d)
//     allSocketServer.emit('ping', d);
// }, 5000);


// Run socket server
httpServer.listen(3030, () => {
    console.log("Socket server is running on http://localhost:3030");
});