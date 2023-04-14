import AuthService from "../../Services/AuthService";

const SignupController = async (req, res) => {
    const authService = new AuthService(req.body);
    const response = await authService.signup();
    return res.json(response);
}
export default SignupController;