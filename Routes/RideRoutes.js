import { Router } from 'express';
import AuthJWT from '../Middlewares/AuthJWT';
import RideController from '../Controllers/RideController/RideController';

const router = Router();

router.post("/", AuthJWT, RideController.GET_RIDE_CONTROLLER);

export default router;