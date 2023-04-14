import { Router } from 'express';
import AuthControllers from '../Controllers/AuthControllers/AuthContollers';
import ROUTES from '../Enums/Routes';
const router = Router();

router.post(ROUTES.POST_SIGNUP, AuthControllers.SIGNUP_CONTROLLER);

router.post(ROUTES.POST_LOGIN, AuthControllers.LOGIN_CONTROLLER);

export default router;