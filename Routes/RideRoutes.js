import { Router } from 'express';
import AuthJWT from '../Middlewares/AuthJWT';
import RideController from '../Controllers/RideController/RideController';

const router = Router();

router.post("/", AuthJWT, RideController.GET_RIDE_CONTROLLER);
router.post("/endtrip", AuthJWT, RideController.END_TRIP_CONTROLLER);
router.get("/activeTrips", AuthJWT, RideController.ACTIVE_TRIP_CONTROLLER);
router.get('/pastTrips', AuthJWT, RideController.PAST_TRIP_CONTROLLER)

export default router;