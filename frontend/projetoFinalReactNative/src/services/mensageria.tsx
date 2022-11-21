import { useEffect } from "react";



const io = require('socket.io-client');
const socket = io('http://192.168.1.107:5000');

export const  sendMessage = (message: string) =>{

    
    socket.emit('message', message);

    
} 

export const getMessage =()=>{ 
  socket.on("connect", () => {  
  console.log(socket); // x8WIv7-mJelg7on_ALbx
})}
