import http from 'http';
import dotenv from 'dotenv'
import express from 'express';
import AppConfig from './AppConfig';
import EnvironmentTypes from './Enums/Environments';
import path from 'path';
import { fileURLToPath } from 'url';
import registerRoutes from './Bootstrap/RegisterRoutes';
import connectToDB from './Bootstrap/RegisterDatabase';
import registerGlobalMiddlewares from './Bootstrap/RegisterGlobalMiddlewares';
import { Server } from "socket.io";
import textMessageForActiveTripDto from './dto/TextMessageForActiveTripDto';


//Jasmine Star

dotenv.config();
const app = express();
const server = http.createServer(app);
export const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000"
    }
});
const PORT = process.env.PORT || AppConfig.DEFAULT_PORT;

io.on('connection', (socket) => {
    socket.on('userJoined', ({ userId }) => {
        console.log(`Connect: SocketId: ${socket.id}, userId: ${userId}`);
        socket.join(userId);
        socket.on('JOIN_TRIP_ROOM', (tripID) => {
            socket.join(tripID);
            socket.on('USER_SENDS_TEXT', (body) => {
                io.in(tripID).emit("USER_GETS_TEXT", textMessageForActiveTripDto(body));
            })
        })
        socket.on('disconnect', () => {
            console.log(`Disconnect: SocketId: ${socket.id}, userId: ${userId}`)
        })
    })
});
registerGlobalMiddlewares(app);
registerRoutes(app);
connectToDB();

if (process.env.ENV === EnvironmentTypes.PROD) {
    app.use(express.static(path.join(path.dirname(fileURLToPath(import.meta.url)), "client", "build")));
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(path.dirname(fileURLToPath(import.meta.url)), "client", "build", "index.html"));
    });
}


server.listen(PORT, () => console.log(`PORT: ${PORT}`));


