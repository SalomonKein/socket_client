import io from 'socket.io-client';
import {SERVER_URL} from '../utils/const';

const socket = io(SERVER_URL, {
  transports: ['polling', 'websocket'],
  reconnection: true,
  reconnectionDelay: 200,
  reconnectionDelayMax: 1000,
});

export async function getTickets(EVENT, func) {
  socket.emit('start');
  socket.on(EVENT, func);
}

export function reconnectTickets() {
  socket.disconnect();
  socket.connect();
}
