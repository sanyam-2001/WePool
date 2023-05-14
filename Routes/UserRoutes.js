import { Router } from 'express';
import ROUTES from '../Enums/Routes';
import UserController from '../Controllers/UserController.js/UserController';
import AuthJWT from '../Middlewares/AuthJWT';
const router = Router();

router.get(ROUTES.USER, AuthJWT, UserController.GET_USER_CONTROLLER);

export default router;