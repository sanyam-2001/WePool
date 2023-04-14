import dotenv from 'dotenv'
import express from 'express';
import AppConfig from './AppConfig';
import EnvironmentTypes from './Enums/Environments';
import path from 'path';
import { fileURLToPath } from 'url';
import registerRoutes from './Bootstrap/RegisterRoutes';
import connectToDB from './Bootstrap/RegisterDatabase';
import UserModel from './Models/UserModel';
import registerGlobalMiddlewares from './Bootstrap/RegisterGlobalMiddlewares';

dotenv.config();
const app = express();
const PORT = process.env.PORT || AppConfig.DEFAULT_PORT;

registerGlobalMiddlewares(app);
registerRoutes(app);
connectToDB();


if (process.env.ENV === EnvironmentTypes.PROD) {
    app.use(express.static(path.join(path.dirname(fileURLToPath(import.meta.url)), "client", "build")));
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(path.dirname(fileURLToPath(import.meta.url)), "client", "build", "index.html"));
    });
}


app.listen(PORT, () => console.log(`PORT: ${PORT}`));


