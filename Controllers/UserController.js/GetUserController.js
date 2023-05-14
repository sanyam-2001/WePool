import UserService from "../../Services/UserService";
const GetUserController = async (req, res) => {
    const userService = new UserService();
    const response = await userService.getOne({ _id: req.user.id });
    res.json(response);
}
export default GetUserController;