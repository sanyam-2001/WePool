import { Router } from 'express';
import ROUTES from '../Enums/Routes';
import GeolocationController from '../Controllers/GeolocationControllers/GeolocationController';
const router = Router();

router.post(ROUTES.AUTOCOMPLETE, GeolocationController.AUTOCOMPLETE_CONTROLLER);
router.get(ROUTES.REVERSE_GEOCODE, GeolocationController.REVERSE_GEOCODE_CONTROLLER);

export default router;