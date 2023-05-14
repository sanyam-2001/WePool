import ROUTES from "../Enums/Routes";
import AuthRoutes from "../Routes/AuthRoutes";
import UserRoutes from '../Routes/UserRoutes';
import GeolocationRoutes from '../Routes/GeolocationRoutes';

const registerRoutes = (app) => {
    app.use(ROUTES.BASE_AUTH, AuthRoutes);
    app.use(ROUTES.BASE, UserRoutes)
    app.use(ROUTES.BASE_GEOLOCATION, GeolocationRoutes);
}

export default registerRoutes;