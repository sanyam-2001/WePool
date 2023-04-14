import AuthService from "../../Services/AuthService";

const LoginController = async (req, res) => {
    const authService = new AuthService(req.body);
    const response = await authService.login();
    return res.json(response);
}
export default LoginController;