import ROUTES from "../Enums/Routes";
import AuthRoutes from "../Routes/AuthRoutes";


const registerRoutes = (app) => {
    app.use(ROUTES.BASE_AUTH, AuthRoutes);
}

export default registerRoutes;