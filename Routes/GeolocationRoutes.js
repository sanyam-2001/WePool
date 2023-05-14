import { Router } from 'express';
import ROUTES from '../Enums/Routes';
import GeolocationController from '../Controllers/GeolocationControllers/GeolocationController';
const router = Router();

router.post(ROUTES.AUTOCOMPLETE, GeolocationController.AUTOCOMPLETE_CONTROLLER);

export default router;