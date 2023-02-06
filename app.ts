import dotenv from 'dotenv';
import Server from './models/server';


export function greetings() : void {
  console.log("hola mundo")
}
greetings();


//configurar dotenv
dotenv.config();
const server = new Server();
server.listen();
